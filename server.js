import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile("./dist/client/index.html", "utf-8")
  : "";

const app = express();

// Trust the first hop reverse proxy (nginx, Cloudflare, Render, etc.) so
// express-rate-limit and req.ip see the real client IP instead of the
// proxy's. Harmless when running directly with no proxy in front.
app.set("trust proxy", 1);

// Every response gets a fresh nonce, allowed into the CSP below, and
// stamped onto the one inline <script> in index.html (see entry-server
// rendering further down) so that script keeps working under a strict CSP
// without needing a blanket 'unsafe-inline'.
app.use((req, res, next) => {
  res.locals.cspNonce = crypto.randomBytes(16).toString("base64");
  next();
});

app.use(
  helmet({
    // Vite's dev client and React Fast Refresh inject inline/eval'd code
    // that a strict CSP would block, so only enforce CSP in production,
    // where the app ships a static, known set of scripts/styles.
    contentSecurityPolicy: isProduction
      ? {
          directives: {
            defaultSrc: ["'self'"],
            scriptSrc: [
              "'self'",
              (req, res) => `'nonce-${res.locals.cspNonce}'`,
              "https://www.googletagmanager.com",
            ],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
            imgSrc: ["'self'", "data:", "https:"],
            mediaSrc: ["'self'"],
            connectSrc: [
              "'self'",
              "https://www.googletagmanager.com",
              "https://www.google-analytics.com",
              "https://analytics.google.com",
              "https://api.emailjs.com",
            ],
            objectSrc: ["'none'"],
            baseUri: ["'self'"],
            formAction: ["'self'"],
            frameAncestors: ["'self'"],
            upgradeInsecureRequests: [],
          },
        }
      : false,
    // Third-party resources here (Google Fonts, gtag, EmailJS) don't send
    // CORP/COEP headers, so a strict embedder policy would block them.
    crossOriginEmbedderPolicy: false,
  })
);

// Blanket ceiling on total traffic per IP, mainly to blunt scripted
// scraping/DoS. Generous because a single page view fans out into many
// asset requests.
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

// Server-side rendering is the expensive operation here (a full React
// render per request), so it gets its own tighter limit — no real visitor
// navigates to 60+ distinct pages a minute.
const renderLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 60,
  standardHeaders: true,
  legacyHeaders: false,
});

let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(
    base,
    sirv("./dist/client", { extensions: [] })
  );
}

app.use("*all", renderLimiter, async (req, res) => {
  const url = req.originalUrl.replace(base, "/");

  // Requests for a file with an extension (images, .well-known probes,
  // source maps, etc.) reaching this point means no static middleware found
  // it — it's a missing asset, not a page. Answer 404 instead of feeding the
  // path to the router, which would otherwise log "No routes matched".
  // (Vite's dev middleware can rewrite req.path for unmatched requests, so
  // this checks req.originalUrl, which Express never mutates.)
  if (path.extname(url)) {
    res.status(404).end();
    return;
  }

  try {
    let template;
    let render;

    if (!isProduction) {
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const { html: appHtml } = render(url);

    const html = template
      .replace(`<!--ssr-outlet-->`, appHtml)
      .replaceAll("__CSP_NONCE__", res.locals.cspNonce);

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.error(e.stack);
    // Never leak stack traces (file paths, dependency versions) to clients.
    res
      .status(500)
      .end(isProduction ? "Internal Server Error" : e.stack);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

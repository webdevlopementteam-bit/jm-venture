# Server-Side Rendering (SSR) — Setup Guide

This project now renders pages on the server (Express + Vite) before sending
HTML to the browser, then hydrates on the client. This improves SEO (crawlers
see full HTML immediately) and first-paint speed.

## 1. What changed, file by file

| File | Role |
|---|---|
| [server.js](server.js) | Express server. Dev: uses Vite in middleware mode for HMR + on-demand SSR. Prod: serves the pre-built `dist/client` assets and imports the pre-built `dist/server/entry-server.js` renderer. |
| [src/entry-client.jsx](src/entry-client.jsx) | Browser entry point. Hydrates the server-rendered HTML with `hydrateRoot`, wraps `<App />` in `<BrowserRouter>`. |
| [src/entry-server.jsx](src/entry-server.jsx) | Server entry point. Exports `render(url)`, which calls `renderToString` with `<App />` wrapped in `<StaticRouter location={url}>`. |
| [src/App.jsx](src/App.jsx) | No longer contains a `<BrowserRouter>` itself — it's just the layout + `<Routes>`. The router wrapper is supplied by whichever entry point renders it (client vs. server), since server rendering needs a `StaticRouter` bound to the request URL instead of reading `window.location`. |
| [src/router.js](src/router.js) | Central re-export of `react-router-dom` primitives (`BrowserRouter`, `StaticRouter`, `Routes`, `Route`, `Link`, `useLocation`, `useNavigate`). All app code imports from here instead of `react-router-dom` directly — see [§4 Gotcha](#4-the-one-gotcha-you-need-to-know) below. |
| [index.html](index.html) | `<div id="root"><!--ssr-outlet--></div>` — the server replaces `<!--ssr-outlet-->` with the rendered app HTML. Script tag now points at `entry-client.jsx` instead of the old `main.jsx`. |
| `src/main.jsx` | **Deleted** — superseded by `entry-client.jsx`. |

## 2. How it works

**Dev (`npm run dev`)**
1. `server.js` starts an Express app and boots Vite in `middlewareMode`.
2. On every request, it reads `index.html` fresh, runs it through `vite.transformIndexHtml` (injects HMR client, resolves `/src/...` paths), and calls `vite.ssrLoadModule("/src/entry-server.jsx")` to get an always-up-to-date `render()` function — no separate build step needed while developing.
3. `render(url)` returns `{ html }`; the server splices it into the `<!--ssr-outlet-->` placeholder and sends the response.
4. The browser loads `entry-client.jsx`, which hydrates instead of re-rendering from scratch.

**Production (`npm run build` then `npm start`)**
1. `npm run build` runs three steps:
   - `sitemap` — regenerates `public/sitemap.xml`.
   - `build:client` — `vite build --outDir dist/client` (browser bundle + `index.html` with hashed asset URLs).
   - `build:server` — `vite build --outDir dist/server --ssr src/entry-server.jsx` (a Node-runnable SSR bundle).
2. `npm start` sets `NODE_ENV=production` and runs `server.js`, which now serves `dist/client` as static files (via `sirv`, gzip via `compression`) and imports the pre-built `dist/server/entry-server.js` directly — no Vite involved at runtime.

## 3. Running it

```bash
npm run dev      # SSR dev server with HMR — http://localhost:5173
npm run build    # production build (dist/client + dist/server)
npm start        # serve the production build — http://localhost:5173
npm run preview  # alias for npm start, same behavior
```

Environment variables `server.js` respects:
- `PORT` — defaults to `5173`.
- `NODE_ENV=production` — switches from dev (Vite middleware) to prod (static + prebuilt) mode.
- `BASE` — base path if you ever deploy under a subpath (defaults to `/`).

## 4. The one gotcha you need to know

`react-router-dom`'s CJS build re-exports `react-router`'s named exports
(`StaticRouter`, `Routes`, `Route`, `Link`, `useLocation`, `useNavigate`, ...)
**dynamically at runtime**, not as static `exports.X = ...` assignments. Vite's
dev-mode SSR module loader (`vite.ssrLoadModule`) can't see dynamic exports —
it only sees the handful of exports react-router-dom declares statically, so
a plain `import { StaticRouter } from "react-router-dom"` throws `Named
export 'StaticRouter' not found` **in dev SSR only** (client-side dev/build
and the production SSR build are unaffected, since those go through
different, more thorough bundlers).

`src/router.js` works around this once, centrally:

```js
import * as ReactRouterDOM from "react-router-dom";
const mod = ReactRouterDOM.BrowserRouter ? ReactRouterDOM : ReactRouterDOM.default;
export const { BrowserRouter, StaticRouter, Routes, Route, Link, useLocation, useNavigate } = mod;
```

- In dev SSR, `ReactRouterDOM.default` holds the *complete* real
  `module.exports` object (unlike named exports, default-import always works
  for CJS interop) — so we fall back to it.
- In the client bundle and the production SSR build, the real ESM file is
  resolved and the namespace already has everything directly, so the first
  branch is used.

**Rule of thumb: whenever you add a new page or component that needs router
APIs, import them from `../router` (or `./router` at the `src/` root), not
from `react-router-dom` directly.** If you import from `react-router-dom`
directly in a component that's part of the render tree, it'll work in the
browser but crash `npm run dev`'s SSR path.

## 5. Things that already work correctly for SSR

- Every `window`/`document`/`sessionStorage` access in the codebase
  (`Header.jsx` scroll listener, `LeadPopup.jsx` popup timer, page-level
  scroll/keydown handlers) is inside `useEffect`, so it only runs client-side
  after hydration — nothing crashes during server rendering.
- `react-hot-toast`'s `<Toaster />` and `swiper/react` are both SSR-safe out
  of the box and needed no changes.

## 6. Adding a new route

1. Create the page component under `src/pages/`.
2. Import router hooks/components from `../router`, not `react-router-dom`.
3. Register it in [src/routes.jsx](src/routes.jsx) and, if it should be
   indexed, in [src/sitemapRoutes.js](src/sitemapRoutes.js).
4. Run `npm run dev` and load the URL directly (not via client-side
   navigation) to confirm it server-renders — `curl -s http://localhost:5173/your-path | grep '<title>'` is a quick sanity check.

## 7. Page-load conversion tags (Google Ads etc.)

`/thank-you` needs its Google Ads conversion snippet to fire reliably and be
visible in "View Page Source" — the way Google's own setup instructions
assume ("paste between `<head></head>`"). It can't just live in a React
`useEffect`, for two reasons:

1. **The real lead flow never reloads the page.** `Contact.jsx` and
   `LeadPopup.jsx` both redirect via `navigate("/thank-you")` — a
   client-side React Router transition, not a new document request. So a
   server-injected `<script>` for that route would never run for actual
   leads; only a mounted-component effect fires in that case.
2. **A direct/hard load of `/thank-you`** (someone opens the URL fresh, a
   verification tool loads it, a page refresh) *does* request a new
   document from the server — and there, a `useEffect`-only conversion
   depends on the full JS bundle downloading, parsing, and hydrating before
   it fires. A visitor who leaves before that finishes is never tracked,
   and the tag never appears in view-source either.

So both paths are covered, without double-firing:
- `server.js` has a `PAGE_LOAD_CONVERSIONS` map (route → literal `<script>`
  string) that gets spliced into `</head>` for matching routes — this is
  real server-rendered HTML, fires the instant the browser parses it, and
  is what shows up in view-source. It also sets
  `window.__conversionsFired["/thank-you"] = true`.
- `ThankYou.jsx`'s `useEffect` still fires the conversion (this is what
  actually tracks the real lead flow), but skips itself if
  `window.__conversionsFired["/thank-you"]` is already set — which is only
  the case on a direct/hard load, where the injected script already fired
  it.

**To add a conversion tag for a new page-load event**, add an entry to
`PAGE_LOAD_CONVERSIONS` in `server.js` (setting the matching
`__conversionsFired` key), and guard any equivalent `useEffect` in that
page's component the same way.

## 8. Deployment notes

- This needs a **Node process running**, not a static file host — `npm start`
  runs an Express server that must stay alive (e.g. via `pm2`, a systemd
  unit, or your platform's Node app runtime). Static-only hosts (GitHub
  Pages, plain S3/CDN) can't run `server.js`.
- Deploy `dist/client`, `dist/server`, `server.js`, `package.json`, and
  `node_modules` (or run `npm ci --omit=dev` on the server — note `vite` is a
  dev dependency and is only imported by `server.js` when `NODE_ENV` is not
  `production`, so it isn't required at runtime in prod).
- Set `NODE_ENV=production` and `PORT` in your hosting environment, then run
  `npm start`.

## 9. Security hardening

`server.js` runs several layers of defense in front of every request:

| Measure | What it does |
|---|---|
| [Helmet](https://helmetjs.github.io/) | Sets `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Strict-Transport-Security`, removes `X-Powered-By`, and more — always on, in both dev and prod. |
| Rate limiting (general) | 300 requests/minute per IP across the whole app — a blunt ceiling against scripted abuse. Generous because one page view fans out into many asset requests. |
| Rate limiting (render) | 60 requests/minute per IP specifically on the SSR catch-all, since `renderToString` is the one CPU-expensive operation per request — this is what actually protects against a render-flooding DoS. |
| `trust proxy` | Set so `req.ip` (and therefore rate limiting) reflects the real client IP when deployed behind a reverse proxy/load balancer, instead of the proxy's own IP. |
| No stack traces to clients | The catch-all's error handler used to do `res.status(500).end(e.stack)`, leaking file paths and dependency versions to anyone who could trigger a 500. It now logs the stack server-side only and sends a generic `Internal Server Error` in production (dev still shows the stack, since that's local-only and useful for debugging). |

**No Content-Security-Policy, deliberately.** An earlier version of this
setup shipped a strict CSP with a per-script nonce. It kept breaking the
Google Ads conversion tag (`AW-...`): each conversion event calls a
different `doubleclick.net` / `google.com` collection subdomain, and Google
adds/rotates these without notice, so any CSP allowlist for ad/tracking
traffic is unbounded, ongoing upkeep rather than a one-time fix. Per
explicit decision, tracking tags (gtag, GTM, conversion pixels, remarketing)
now run with no CSP or nonce restrictions at all — `contentSecurityPolicy`
is `false` in the Helmet config in `server.js`. The other headers above
(HSTS, frame-options, nosniff, rate limiting) are unaffected and still
protect the app.

If you want CSP back in the future, scope it narrowly (e.g. only on routes
that don't load ad tags, or `Content-Security-Policy-Report-Only` to observe
without blocking) rather than trying to allowlist Google's ad-tech domains
outright.

**What this doesn't cover:** TLS termination, DDoS mitigation at the network
layer, and request timeouts are better handled by a reverse proxy/CDN in
front of Node (nginx, Cloudflare, your host's load balancer) than reimplemented
in the app — the measures above protect the application layer, not the
transport layer.

## 10. Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `Named export 'X' not found` from `react-router-dom` during `npm run dev` | Something imports router APIs directly from `react-router-dom` instead of `./router` | Change the import to `../router` / `./router` |
| Blank page, works after a client-side navigation but not on hard refresh | A component reads `window`/`document` outside `useEffect` | Move the access into `useEffect` (see §5) |
| `dist/server/entry-server.js` not found when running `npm start` | Forgot to run `npm run build` first | Run `npm run build`, then `npm start` |
| Port already in use on restart | A previous `node server.js` (or its Vite HMR websocket on port `24678`) is still running | `lsof -ti:5173,24678 \| xargs kill -9` |
| Console spam: `No routes matched location "/some-file.jpg"` | A component references an asset by absolute path (e.g. `poster="/hero-bg.jpg"`) that doesn't exist in `public/`, so the request 404s and used to fall through to SSR, which tried to render it as a page. `server.js`'s catch-all now answers 404 immediately for any unmatched request whose path has a file extension, so this no longer happens — but it means the asset is still genuinely missing. | Add the missing file to `public/`, or fix the reference to point at a real asset. |
| `429 Too Many Requests` during normal use/testing | You (or a load test / bot) exceeded the rate limits in §9 | Wait for the 1-minute window to reset, or raise `limit` in `server.js` if the defaults are too tight for your traffic pattern |
| Real client IPs show up as the load balancer's IP in logs, or rate limiting seems to apply globally instead of per-visitor | Running behind a reverse proxy that isn't the immediate first hop `trust proxy: 1` expects | Adjust the `trust proxy` value in `server.js` to match your proxy chain (see the [Express `trust proxy` docs](https://expressjs.com/en/guide/behind-proxies.html)) |

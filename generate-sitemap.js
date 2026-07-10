import fs from "fs";
import routes from "./src/sitemapRoutes.js";

const DOMAIN = "https://www.jm-ventures.in";
const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    let priority = "0.8";
    let changefreq = "monthly";

    if (route === "/") {
      priority = "1.0";
      changefreq = "weekly";
    } else if (
      route === "/projects" ||
      route.startsWith("/iconic") ||
      route.startsWith("/london") ||
      route.startsWith("/ace") ||
      route.startsWith("/galaxy") ||
      route.startsWith("/gaur")
    ) {
      priority = "0.9";
      changefreq = "weekly";
    } else if (
      route === "/privacy-policy" ||
      route === "/terms-and-conditions"
    ) {
      priority = "0.3";
      changefreq = "yearly";
    }

    return `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("")}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", xml);

console.log("✅ Sitemap generated successfully!");
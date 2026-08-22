import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";

// Slidev serves static assets from `<dirname(entry)>/public` by default,
// but all decks share images/favicon from `presentaciones/public/` instead
// of duplicating them under `slides/`.
const root = fileURLToPath(new URL(".", import.meta.url));

const GA_MEASUREMENT_ID = "G-16EPG4H9SD";

function googleAnalytics(): Plugin {
  return {
    name: "google-analytics",
    transformIndexHtml: () => [
      {
        tag: "script",
        attrs: { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}` },
        injectTo: "head",
      },
      {
        tag: "script",
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`,
        injectTo: "head",
      },
    ],
  };
}

export default defineConfig({
  publicDir: resolve(root, "../public"),
  plugins: [googleAnalytics()],
});

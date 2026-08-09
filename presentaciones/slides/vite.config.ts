import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// Slidev serves static assets from `<dirname(entry)>/public` by default,
// but all decks share images/favicon from `presentaciones/public/` instead
// of duplicating them under `slides/`.
const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  publicDir: resolve(root, "../public"),
});

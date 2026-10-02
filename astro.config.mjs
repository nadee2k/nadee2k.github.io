// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nadee2k.github.io",
  output: "static",
  trailingSlash: "ignore",
  build: {
    // Emit /about/index.html style paths only where a folder exists.
    format: "directory",
  },
  image: {
    // Serve modern formats everywhere it is safe to do so.
    responsiveStyles: true,
  },
  integrations: [sitemap()],
  vite: {
    build: {
      assetsInlineLimit: 2048,
    },
  },
});
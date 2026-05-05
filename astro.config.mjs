import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://rauljcamacho.online",
  output: "static",
  trailingSlash: "ignore",
  integrations: [mdx(), sitemap()],

  build: {
    inlineStylesheets: "auto",
    format: "directory",
  },

  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },

  adapter: cloudflare(),
});
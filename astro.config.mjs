import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://neurotechh.xyz",

  output: "server",

  adapter: node({
    mode: "standalone",
  }),

  integrations: [
    react(),
    sitemap(),
    sanity(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: {
    prefetchAll: true,
  },
});
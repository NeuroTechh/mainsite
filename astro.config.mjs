import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://neurotechh.mpst.me",
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
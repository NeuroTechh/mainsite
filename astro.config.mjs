import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://neurotechh.live/",
  integrations: [tailwind(), sitemap()],
  output: "server",
  adapter: vercel(),
  prefetch: {
    include: "all"
  }
});
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import preact from "@astrojs/preact";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://neurotechh.live/",
  integrations: [tailwind(), sitemap(), react()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  prefetch: {
    prefetchAll: true,
  },
});

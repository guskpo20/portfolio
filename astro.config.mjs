import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

export default defineConfig({
  site: 'https://tavo.work',
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: [sitemap({
    filter: (page) => page !== 'https://tavo.work/404/'
  }), mdx(), react()]
});
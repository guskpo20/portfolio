import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: 'https://tavo.work',
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: [sitemap(), mdx()]
});
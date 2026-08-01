import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://agenthq.local",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});

import { defineNuxtConfig } from "nuxt/config";
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/i18n", "@nuxt/image"],

  routeRules: {
    "/": { redirect: "/home" },
  },

  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.min.css"],

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    plugins: [vuetify()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/main.scss" as *;',
        },
      },
    },
  },

  components: {
    dirs: [
      "~/src/components/Blocks",
      "~/src/components/Reusable",
      "~/src/components/Blog",
      "~/src/components/Modal",
      "~/src/components/Sliders/SocialSlider",
      "~/src/views",
    ],
  },

  compatibilityDate: "2024-07-11",
});

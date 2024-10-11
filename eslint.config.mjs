import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    globals: {
      window: "readonly",
      document: "readonly",
      defineNuxtPlugin: "readonly",
    },
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
})
  .prepend({
    rules: {
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "any",
          },
        },
      ],
    },
  })
  .override("nuxt/javascript", {
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  });

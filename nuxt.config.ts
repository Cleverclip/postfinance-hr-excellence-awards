// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image-edge"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["@/assets/styles/typography.sass"],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/styles/variables.sass" as *\n',
        },
      },
    },
  },
});

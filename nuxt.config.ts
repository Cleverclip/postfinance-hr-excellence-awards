// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image-edge", "nuxt-svgo"],
  app: {
    pageTransition: { name: "page", mode: "default" },
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
  svgo: {
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              cleanupIDs: false,
              collapseGroups: false,
              removeViewBox: false,
              convertPathData: false,
              removeUnknownsAndDefaults: false,

            }
          }
        }
      ]
    }
  }
});

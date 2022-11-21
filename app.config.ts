export default defineAppConfig({
  title: 'Website Starter',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000',
    },
  },
  head: {
    title: 'Website Starter',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-16' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { name: 'theme-color', content: '#fff' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: '',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },
})

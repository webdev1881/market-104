export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'market-104',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/scss/main.scss',
    '@/static/scss/vars.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  styleResources: {
    scss: [
      '@/static/scss/vars.scss'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBNCc9aDvetZu9DVIqHZiqHTcUQP-bU2Xg",
          authDomain: "market-2022.firebaseapp.com",
          projectId: "market-2022",
          storageBucket: "market-2022.appspot.com",
          messagingSenderId: "653080122490",
          appId: "1:653080122490:web:50d29402850ec3200657c3",
          measurementId: "G-CDTF9ZLRS3"
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true
        }
      },
      
    ],
    
  ],

  i18n: {
    defaultLocale: '',
    locales: [
      {code: 'ua', file: "ua.js" },
      {code: 'ru', file: "ru.js" },
    ],
    lazy: true,
    langDir: "locales/"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}

import colors from 'vuetify/es5/util/colors'

const desc = 'Aplikasi Social Media Sederhana dari MuhReezky';

export default {
  env: {
    baseUrl: process.env.ENDPOINT || 'http://localhost:5000/api',
    supabaseKey: process.env.SUPABASE_KEY,
    supabaseUrl: process.env.SUPABASE_URL,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | MiniSocial',
    title: 'App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: desc },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index,follow' },
      { name: 'og:title', content: 'MiniSocial' },
      { name: 'og:url', content: 'https://minisocial.vercel.app' },
      { name: 'og:site_name', content: 'MiniSocial App' },
      { name: 'og:description', content: desc }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel: 'preload', 
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap', 
        as: 'style',
        onload: 'this.onload = null; this.rel = `stylesheet`;'
      },
      { 
        rel: 'preload', 
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css', 
        as: 'style',
        onload: 'this.onload = null; this.rel = `stylesheet`;'
      },
      {
        rel: 'preload',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/fonts/materialdesignicons-webfont.woff2?v=7.2.96',
        as: 'font'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/uploadfile.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],

  publicRuntimeConfig: {
    vgyKey: process.env.VGY_ME_KEY,
    supabaseKey: process.env.SUPABASE_KEY,
    supabaseUrl: process.env.SUPABASE_URL,
    bucketUrl: process.env.BUCKET_URL
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.ENDPOINT,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'MiniSocial App',
      lang: 'id',
    },
  },
  
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'data.token' },
          user: { url: '/auth/me', method: 'get', propertyName: 'data.user' },
          logout: false
        }
      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

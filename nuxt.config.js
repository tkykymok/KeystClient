export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'KeystClient',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  ssr: false,
  // Global CSS npm install js-cookie(https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vuejs-datepicker.ts', mode: 'client'},
    { src: '~/plugins/axios-accessor', mode: 'client'},
    { src: '@/plugins/vue-ctk-date-time-picker.ts', mode: 'client' },
    { src: '~/plugins/vuex-cookies.ts', mode: 'client' },
    { src: '~/plugins/vue-js-modal.ts', mode: 'client', ssr: true },
    { src: '~/plugins/vue-simple-suggest.ts', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-fontawesome',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyD3UtAfW_EeW99wPbbrG8FXTRB5C2qRRRI",
          authDomain: "keystone-9aa5b.firebaseapp.com",
          projectId: "keystone-9aa5b",
          storageBucket: "keystone-9aa5b.appspot.com",
          messagingSenderId: "948370719014",
          appId: "1:948370719014:web:1163c19a546afdf46381e7"
        },
        services: {
          storage: true,
        }
      }
    ]
  ],

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};

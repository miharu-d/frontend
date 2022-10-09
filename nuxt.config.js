import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - frontend',
    title: 'frontend',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/constants.ts' },
    { src: '~/plugins/axios.ts' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next'
  ],

  axios: {
    prefix: process.env.API_URL,
    proxy: true,
    credentials: true,
  },

  proxy: {
    '/api': process.env.API_URL,
    '/laravel': {
      target: process.env.NODE_URL,
      pathRewrite: { '^/laravel': '/' }
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
          success: colors.green.accent3
        }
      }
    }
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/'
    },
    localStorage: false,
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.API_URL,
        endpoints: {
          csrf: {
            url: '/sanctum/csrf-cookie'
          },
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
        }
      },
      cookie: {
        cookie: {
          name: 'XSRF-TOKEN'
        }
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  privateRuntimeConfig: {
    axios: {
      prefix: process.env.API_URL,
    }
  },
  publicRuntimeConfig: {
    // axios: {
    //   browserBaseURL: process.env.NODE_ENV !== 'production' ? process.env.SERVER_URL : '',
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: Boolean(process.env.DEVTOOL) },
  ssr: true,
  typescript: {
    typeCheck: true,
  },

  site: {
    url: 'https://example.com',
    name: 'Санаторий ЛЕС',
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['noindex'].includes(tag),
    },
  },

  app: {
    head: {
      title: 'Санаторий ЛЕС',
      link: [
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/Manrope/Manrope-Regular.woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/Manrope/Manrope-Light.woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/Manrope/Manrope-Semibold.woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff',
          href: '/fonts/PlayfairDisplay/PlayfairDisplay-Medium.woff',
          crossorigin: '',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff',
          href: '/fonts/PlayfairDisplay/PlayfairDisplay-MediumItalic.woff',
          crossorigin: '',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff',
          href: '/fonts/PlayfairDisplay/PlayfairDisplay-Regular.woff',
          crossorigin: '',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff',
          href: '/fonts/PlayfairDisplay/PlayfairDisplay-Italic.woff',
          crossorigin: '',
        },

        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicons/site.webmanifest', crossorigin: 'use-credentials' },
        { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#00382a' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'msapplication-navbutton-color', content: '#00382a' },
        { name: 'apple-mobile-web-app-status-bar-style', content: '#ffffff' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'format-detection', content: 'address=no' },
        { name: 'format-detection', content: 'date=no' },
        { name: 'format-detection', content: 'email=no' },
        {
          property: 'og:image',
          content: '/favicons/android-chrome-512x512.png',
        },
        {
          property: 'og:image:url',
          content: '/favicons/android-chrome-512x512.png',
        },
        { property: 'og:image:width', content: '512' },
        { property: 'og:image:height', content: '512' },
        { property: 'og:title', content: 'Санаторий ЛЕС' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: '' },
        {
          property: 'og:description',
          content: 'Добро пожаловать',
        },
        {
          name: 'msapplication-config',
          content: '/favicons/browserconfig.xml',
        },
        { property: 'og:locale', content: 'ru_RU' },
        { content: 'IE=Edge, chrome=1', 'http-equiv': 'X-UA-Compatible' },
        { content: 'noindex', name: 'robots' },
        { name: 'msapplication-TileColor', content: '#1f8a70' },
        { name: 'theme-color', content: '#ffffff' },
      ],
    },
  },

  modules: ['nuxt-schema-org', 'nuxt-viewport', 'nuxt-swiper', '@samk-dev/nuxt-vcalendar'],
  viewport: {
    breakpoints: {
      is_1920: 1920,
      is_1880: 1880,
      is_1670: 1670,
      is_1650: 1650,
      is_1550: 1550,
      is_1450: 1450,
      is_1200: 1201,
      is_1100: 1100,
      is_1024: 1025,
      is_920: 921,
      is_768: 769,
      is_690: 691,
      is_425: 425,
      is_375: 375,
      is_320: 320,
    },
    defaultBreakpoints: {
      is_1920: 'desktop',
      is_1880: 'desktop',
      is_1670: 'desktop',
      is_1650: 'desktop',
      is_1550: 'desktop',
      is_1450: 'desktop',
      is_1200: 'desktop',
      is_1100: 'tablet',
      is_1024: 'tablet',
      is_920: 'tablet',
      is_768: 'mobile',
      is_690: 'mobile',
      is_425: 'mobile',
      is_375: 'mobile',
      is_320: 'mobile',
    },
    fallbackBreakpoint: 'is_1920',
  },
  runtimeConfig: {
    public: {
      APIurl: process.env.API,
      SITE_URL: process.env.SITE_URL,
      MEDIA_URL: process.env.MEDIA_URL,
    },
  },

  components: [
    {
      path: '~/components',
    },
  ],

  devServer: {
    port: Number(process.env.PORT) || 3000,
  },

  css: [
    '~/assets/stylesheets/helpers/_fonts.scss',
    '~/assets/stylesheets/helpers/_normalize.scss',
    '~/assets/stylesheets/global.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/stylesheets/helpers/_variables.scss";',
        },
      },
    },
  },
});

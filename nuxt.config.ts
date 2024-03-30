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

  app: {
    head: {
      title: 'Санаторий ЛЕС',
      link: [
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: 'assets/fonts/Manrope/Manrope-Regular.woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: 'assets/fonts/Manrope/Manrope-Light.woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff',
          href: 'assets/fonts/PlayfairDisplay/PlayfairDisplay-Regular.woff',
          crossorigin: '',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff',
          href: 'assets/fonts/PlayfairDisplay/PlayfairDisplay-Bold.woff',
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

  modules: ['nuxt-schema-org'],

  runtimeConfig: {
    public: {
      APIurl: process.env.API,
    },
  },

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

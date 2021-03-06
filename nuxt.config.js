import { resolve } from 'path';
import getRoutes from './utils/getRoutes';

export default {
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  loading: '@/components/loader.vue',
  server: {
    port: 8000,
  },
  alias: {
    images: resolve(__dirname, './assets/images'),
  },
  css: ['@/assets/css/reset.scss'],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/google-gtag', {
      id: 'G-7K43G97QC2',
      config: {
        anonymize_ip: true,
        send_page_view: false,
        linker: {
          domains: ['exit5.co.kr']
        }
      },
      debug: true,
      disableAutoPageTrack: false,
    }],
  ],
  modules: [
    ['nuxt-highlightjs', {
      style: 'obsidian'
    }],
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
  ],
  content: {
    dir: 'content/public'
  },
  generate: {
    routes: () => getRoutes()
  },
  styleResources: {
    scss: [
      '~/assets/css/_variable.scss',
      '~/assets/css/_mixin.scss'
    ],
  },
  build: {},
  sitemap: {
    hostname: 'https://exit5.co.kr/',
    routes: () => getRoutes()
  },
  plugins: ['~/plugins/index.js'],
  router: {
    middleware: ['index'],
  }
};

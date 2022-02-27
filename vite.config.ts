import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      mode: "development",
      base: "/",
      srcDir: "src",
      filename: "sw.ts",
      strategies: "injectManifest",
      includeAssets: ['favicon.svg', 'favicon.ico', 'apple-touch-icon.png'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'Weather from every where!',
        short_name: 'Weather',
        description: 'Progresive web aplication that shows the weather in your location',
        start_url: "/",
        theme_color: '#ffffff',
        display: "standalone",
        icons: [
          {
            src: '/assets/images/icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/assets/images/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: '/assets/images/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: '/assets/images/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/assets/images/icon-168x168.png',
            sizes: '168x168',
            type: 'image/png',
          },
          {
            src: '/assets/images/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/assets/images/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ]
      },
      workbox: {
        sourcemap: true  
      },
      //enable SW in develop
      devOptions: {
        enabled: true,
        type: 'module'
      }
    })
  ]
})

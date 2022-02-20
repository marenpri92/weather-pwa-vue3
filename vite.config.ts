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
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
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
            src: 'logo-192x192.png',
            sizes: '192x192',
            type: 'assets/image/png',
          },
          {
            src: 'logo-512x512.png',
            sizes: '512x512',
            type: 'assets/image/png',
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

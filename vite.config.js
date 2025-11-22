import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Aprendiendo',
        short_name: 'Aprendiendo',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2563eb',
        lang: 'es',
        icons: [
          { src: '/icons/192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
          { src: '/icons/512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
        ]
      },
      workbox: {
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [200] }
            }
          },
          {
            urlPattern: ({ url }) => url.hostname.includes('i.ytimg.com'),
            handler: 'CacheFirst',
            options: { cacheName: 'yt-thumbs', expiration: { maxEntries: 60 } }
          }
        ]
      }
    })
  ],
  build: {
    target: 'es2020',
    cssMinify: true,
    sourcemap: false
  }
})

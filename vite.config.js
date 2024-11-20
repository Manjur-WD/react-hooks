import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(), // React plugin
    VitePWA({
      registerType: 'autoUpdate',  // Automatically update the service worker
      devOptions: {
        enabled: true,  // Enable during development for easier testing
      },
      manifest: {
        name: 'My Vite React App',
        short_name: 'ViteReact',
        description: 'A Vite-powered React PWA app',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone', // App behaves like a native app
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});

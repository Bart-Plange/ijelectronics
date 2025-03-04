import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    
    // Image optimization (Auto-WebP conversion + compression)
    ViteImageOptimizer({
      webp: {
        quality: 80,
        lossless: false,
        effort: 6
      },
      jpg: {
        quality: 80,
        mozjpeg: true
      },
      png: {
        quality: 80,
        compressionLevel: 9
      },
      avif: {
        quality: 70,
        lossless: false
      }
    }),

    
  ],
  build: {
    minify: 'terser',
    cssCodeSplit: true,
    sourcemap: true, // Recommended for debugging in production
    rollupOptions: {
      output: {
        // Cache-busting for long-term caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        // Tree-shaking for better bundle size
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        pure_funcs: ['console.info', 'console.debug']
      }
    }
  },
  server: {
    headers: {
      // Preconnect to external domains
      'Link': [
        '<https://fonts.gstatic.com>; rel=preconnect',
        '<https://fonts.googleapis.com>; rel=preconnect'
      ]
    }
  }
});
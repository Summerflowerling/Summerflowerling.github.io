import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          ui: ['lucide-react', 'react-modal', 'react-responsive'],
        },
      },
    },

    assetsInlineLimit: 8192,

    cssCodeSplit: true,

    sourcemap: false,

    minify: 'esbuild',

    target: 'es2015',
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
});

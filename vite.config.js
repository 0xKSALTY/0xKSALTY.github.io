import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'dist',  // Set the root to 'dist'
  build: {
    outDir: '../build',  // Output to a different folder to avoid conflicts
    rollupOptions: {
      input: resolve(__dirname, 'dist/index.html'),
    },
  },
  server: {
    historyApiFallback: true,  // Enable SPA fallback
  },
});


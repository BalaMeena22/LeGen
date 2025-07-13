import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    // Add this for proper SPA routing in development
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['tesseract.js'], // Add other problematic modules here
      output: {
        // This helps with chunking issues
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  // Add base configuration for deployment
  base: './Letgen', // Use './' for relative paths in most deployments
  // OR if deploying to a subpath:
  // base: '/your-subpath/',
});
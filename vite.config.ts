import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' so the build works on GitHub Pages under /<repo>/ and when opened locally.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        // course content changes rarely: separate chunks so app updates don't re-download it
        manualChunks: (id) => {
          if (id.includes('node_modules')) return 'vendor';
          if (/src\/content\/(b1|b2|c1)\/words\//.test(id)) return 'words';
          if (/src\/content\/(b1|b2|c1)\//.test(id)) return 'course';
          return undefined;
        },
      },
    },
  },
  test: { environment: 'node' },
});

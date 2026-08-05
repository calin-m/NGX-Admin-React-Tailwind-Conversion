import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: false
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.{js,jsx}'],
    exclude: ['old-src/**', 'node_modules/**'],
    pool: 'forks',
    poolOptions: {
      forks: {
        maxForks: 4,
        minForks: 1
      }
    },
    sequence: {
      concurrent: false
    }
  }
});

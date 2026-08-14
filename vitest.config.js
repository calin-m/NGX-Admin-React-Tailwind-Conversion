import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [],
    include: ['src/**/*.{test,spec}.{js,jsx}'],
    reporters: ['default', 'json'],
    outputFile: 'docs/test-results.json',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json'],
      include: ['src/**/*.{js,jsx}'],
      exclude: [
        'src/**/*.{test,spec,stories}.{js,jsx}',
        'src/main.jsx',
        'node_modules/**',
        'old-src/**',
        'scripts/**',
        'dist/**',
        'storybook-static/**'
      ],
      thresholds: {
        lines: 85,
        statements: 85,
        branches: 70
      }
    }
  }
});


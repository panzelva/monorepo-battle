import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

module.exports = defineConfig({
  plugins: [
    react({ jsxImportSource: '@emotion/react', jsxRuntime: 'automatic' }),
  ],
  build: {
    sourcemap: true,
  },
});

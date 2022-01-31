import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-dts';

function isExternal(id: string) {
  return !id.startsWith('.') && !path.isAbsolute(id);
}

module.exports = defineConfig({
  plugins: [
    react({ jsxImportSource: '@emotion/react', jsxRuntime: 'automatic' }),
    dts(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'Component0001',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs', 'umd', 'iife'],
    },
    rollupOptions: { external: isExternal },
  },
});

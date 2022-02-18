import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-dts';

export default defineConfig({
  plugins: [react({ jsxImportSource: '@emotion/react' }), dts()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs', 'es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Since we publish our ./src folder, there's no point
        // in bloating sourcemaps with another copy of it.
        sourcemapExcludeSources: true,
      },
    },
    sourcemap: true,
    // Reduce bloat from legacy polyfills.
    target: 'esnext',
    // Leave minification up to applications.
    minify: false,
  },
});

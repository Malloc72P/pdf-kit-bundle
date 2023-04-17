import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'ModuleName',
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['iife', 'es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: 'module-name-[extname]',
      },
    },
  },
  plugins: [dts({})],
});

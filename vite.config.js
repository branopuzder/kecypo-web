import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  publicDir: 'src/static',
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    sourcemap: false,
  }
});

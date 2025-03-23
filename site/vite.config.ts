import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    hmr: true,
  },
  base: '/GistVis/',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
});

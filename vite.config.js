import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Allows absolute imports from "src/"
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@context': path.resolve(__dirname, './src/context'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
});

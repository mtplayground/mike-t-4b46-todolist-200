import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: [
      'mike-t-4b46-todolist-200-d8c17a-bp4af.sprites.app',
      'mike-t-4b46-todolist-200-d8c17a-bp4af.mctai.app',
    ],
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/webDev-tasks/kinopoisk-app/',
  plugins: [react()],
});

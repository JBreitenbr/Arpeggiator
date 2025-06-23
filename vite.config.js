import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/Arpeggiator/',
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true
  }
})

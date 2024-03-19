import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
const env = loadEnv(mode, process.cwd(), '');

// https://vitejs.dev/config/
export default defineConfig({
  define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
})

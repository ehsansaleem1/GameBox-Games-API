import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  const env = loadEnv(mode, process.cwd(), '');
  define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
})

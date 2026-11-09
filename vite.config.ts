import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tooth-cure-dental-clinic/',
  server: {
    allowedHosts: true,
    cors: true,
  },
})

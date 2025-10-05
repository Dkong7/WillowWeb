import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/WillowWeb/', // 👈 cambia "WillowWeb" por el nombre EXACTO de tu repo
})

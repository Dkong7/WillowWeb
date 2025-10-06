import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/WillowWeb/', // ✅ Debe coincidir EXACTAMENTE con el nombre del repo (sensible a mayúsculas)
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // AJUSTADO: Se eliminó '/WillowWeb/' para funcionar con el dominio personalizado
})
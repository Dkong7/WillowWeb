import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // ESTO ESTÁ CORRECTO para www.thisiswillowtree.com
})
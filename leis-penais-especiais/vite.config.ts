import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    cssMinify: true,
    // O chunk do Three.js (cena 3D) é grande por natureza, mas é lazy e
    // só carrega no desktop com WebGL — não afeta a landing inicial nem o mobile.
    chunkSizeWarningLimit: 1200,
  },
})

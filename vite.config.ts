import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Navegadores alvo já suportam ES2022 e <link rel="modulepreload">:
    // menos transpilação e sem polyfill no bundle inicial.
    target: 'es2022',
    modulePreload: { polyfill: false },
  },
})

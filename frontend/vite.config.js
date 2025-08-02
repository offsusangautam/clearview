import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
   theme: {
    extend: {
      colors: {
        "primary": "#4B3CF0",
        "secondary": "#F9C326",
      },
    },
  },
})

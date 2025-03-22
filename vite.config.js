import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        darkgreen: "#28b30e",
        txtgray: '#afb0b5',
      },
    },
  },
  plugins: [tailwindcss(), react()],
})

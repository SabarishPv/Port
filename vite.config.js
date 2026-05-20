import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths keep the build working on GitHub Pages even when
  // the repository name becomes part of the site URL.
  base: './',
  plugins: [react()],
})

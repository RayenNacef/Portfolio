import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set `base` to '/<repo-name>/' if you deploy to GitHub Pages under a sub-path.
  base: './',
})

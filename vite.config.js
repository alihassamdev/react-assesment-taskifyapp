import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 👈 This lets you use @ as a base path for /src
      'utils': path.resolve(__dirname, 'src/utils') // 👈 Optional alias just for utils
    }
  }
})

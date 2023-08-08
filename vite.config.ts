import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@heroimg' : path.resolve(__dirname, './src/assets/zxc.avif'),
      '@audi' : path.resolve(__dirname, './src/assets/audi.avif'),
      '@mercedes' : path.resolve(__dirname, './src/assets/mercedes.avif'),
      '@bmw' : path.resolve(__dirname, './src/assets/bmw.avif'),
      '@porsche' : path.resolve(__dirname, './src/assets/porsche.avif'),
    }
  },
  plugins: [react()],
  base: '/'
})

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
      '@airport' : path.resolve(__dirname, './src/assets/typeofservices/airport.avif'),
      '@wedding' : path.resolve(__dirname, './src/assets/typeofservices/wedding.avif'),
      '@date' : path.resolve(__dirname, './src/assets/typeofservices/date.avif'),
    }
  },
  plugins: [react()],
  base: '/'
})

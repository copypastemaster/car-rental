import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@static' : path.resolve(__dirname, './src/assets/carcategory')
    }
  },
  plugins: [react()],
  base: '/'
})

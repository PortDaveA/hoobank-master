import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hoobank-master/', // Url of HooBank's Website
  plugins: [react()]
})
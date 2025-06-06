import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: /\.css$/,
  exclude: /\.module\.css$/,
  use: ['style-loader', 'css-loader']
})

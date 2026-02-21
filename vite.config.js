import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression({ algorithm: 'brotliCompress' })],
  server: {
    proxy: {
      '/leetcode-api': {
        target: 'https://leetcode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/leetcode-api/, ''),
        secure: false,
        headers: {
          'Referer': 'https://leetcode.com/',
          'Origin': 'https://leetcode.com/'
        }
      }
    }
  }
})

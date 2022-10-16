import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
  base: '/',
  server: {
    port: 3001,
    cors: true,
  },
  plugins: [
    vue(),
    qiankun('vue', {
      useDevMode: true
    })
  ]
})


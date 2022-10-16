import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankunPlugin from 'vite-plugin-qiankun';

const useDevMode = true

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: [
      {find: '@', replacement: '/src'}
    ]
  },
  server: {
    port: 3002,
    cors: true,
  },
  plugins: [
    // useDevMode = true 时不开启热更新
    react({
      fastRefresh: !useDevMode
    }),
    qiankunPlugin('viteApp', {
      useDevMode
    })
  ],
})

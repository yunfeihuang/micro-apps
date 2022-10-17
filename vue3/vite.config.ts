import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';

const envPrefix = ['VITE_', 'QK_']
export default defineConfig(({mode}) => {
  return {
    envPrefix,
    base: loadEnv(mode, process.cwd(), envPrefix).QK_BASE_URL,
    server: {
      port: 3001,
      cors: true,
    },
    plugins: [
      vue(),
      qiankun('vue', {
        useDevMode: true
      })
    ],
    build: {
      assetsInlineLimit: 4096 * 10
    }
  }
})


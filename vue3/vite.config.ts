import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';
import path from 'path';

const envPrefix = ['VITE_', 'QK_']
export default defineConfig(({mode}) => {
  return {
    envPrefix,
    base: loadEnv(mode, process.cwd(), envPrefix).QK_BASE_URL,
    resolve: {
      alias: [
        {find: '@', replacement: '/src'}
      ]
    },
    server: {
      port: 3001,
      cors: true,
    },
    plugins: [
      vue(),
      qiankun('vue', {
        useDevMode: true
      }),
      qiankun('h5', {
        useDevMode: true
      })
    ],
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          h5: path.resolve(__dirname, 'h5/index.html')
        }
      }
    }
  }
})


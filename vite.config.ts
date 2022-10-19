import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  // const env = loadEnv(mode, process.cwd(), 'VITE_')
  // console.log('env', env)
  return {
    envPrefix: ['VITE_', 'QK_'],
    resolve: {
      alias: [
        {find: '@', replacement: '/src'}
      ]
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    ],
    base: '/',
    server: {
      port: 3000,
      cors: true,
      open: true,
      proxy: {
        '/vue/src/assets': 'http://localhost:3001',
        '/react/src/assets': 'http://localhost:3002',
      }
    }
  }
})

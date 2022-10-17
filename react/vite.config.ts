import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankunPlugin from 'vite-plugin-qiankun';
import vitePluginImp from 'vite-plugin-imp'

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
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
    qiankunPlugin('viteApp', {
      useDevMode
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': 'red',//设置antd主题色
        },
      },
    }
  },
})

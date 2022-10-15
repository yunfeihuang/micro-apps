import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import {registerMicroApps, start} from 'qiankun'

registerMicroApps([
  {
    name: 'main',
    entry: 'http://127.0.0.1:5173/',
    container: '#micro-app',
    activeRule: '/'
  }
])
createApp(App).use(createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: () => import('./components/HelloWorld.vue')
  }]
})).use(createPinia()).mount('#app').$nextTick(() => {
  // start()
})
// start()


import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import {ObjectType, registerMicroApps, RegistrableApp, start, initGlobalState} from 'qiankun'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import microApps from './micro-apps'



createApp(App).use(createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: () => import('./components/HelloWorld.vue')
  }]
})).use(createPinia()).mount('#app')

registerMicroApps(microApps.map(function (item): RegistrableApp<ObjectType> {
  item.props = {
    routerBase: item.activeRule
  }
  return item
}))
start({
  prefetch: false,
  sandbox: {strictStyleIsolation: true}
})

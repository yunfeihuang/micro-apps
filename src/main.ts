import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import {ObjectType, registerMicroApps, RegistrableApp, start, initGlobalState} from 'qiankun'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import microApps from './micro-apps'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: () => import('./components/HelloWorld.vue')
  }]
})
createApp(App).use(router).use(createPinia()).mount('#main-app')

document.body.addEventListener('click', function (event) {
  const target = event.target as HTMLAnchorElement
  if (target.tagName.toUpperCase() === 'A' && target.target === '_qiankun') {
    event.preventDefault()
    router.push(`${target.getAttribute('href')}`)
  }
}, false)
document.addEventListener('link', function (event) {
  console.log('link', event)
}, false)

registerMicroApps(microApps.map(function (item): RegistrableApp<ObjectType> {
  item.props = {
    baseURL: item.activeRule,
    // $router: router
  }
  return item
}))
start({
  prefetch: false,
  // sandbox: {strictStyleIsolation: true}
})

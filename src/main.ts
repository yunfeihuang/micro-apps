import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import {ObjectType, registerMicroApps, RegistrableApp, start, initGlobalState, MicroAppStateActions} from 'qiankun'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import microApps from './micro-apps'
import { useQiankunStore } from '@/store/qiankun'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: () => import('./components/HelloWorld.vue')
  }]
})
const pinia = createPinia()
const appInstance = createApp(App).use(router).use(pinia)

// 主应用跳转
document.body.addEventListener('click', function (event) {
  const target = event.target as HTMLAnchorElement
  if (target.tagName.toUpperCase() === 'A' && target.target === 'router-link') {
    event.preventDefault()
    router.push(`${target.getAttribute('href')}`)
  }
}, false)
document.addEventListener('router-link', function (event) {
  router.push((event as CustomEvent).detail)
}, false)

const initState: Record<string, any> = {token: 'token...', user: {name: '张三', age: 20}}
// 初始化 state
const actions: MicroAppStateActions = initGlobalState(initState);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
  Object.assign(initState, state)
  const qiankunStore = useQiankunStore()
  qiankunStore.setUser(state.user)
});
appInstance.config.globalProperties.$setGlobalState = actions.setGlobalState
// actions.setGlobalState(state);
registerMicroApps(microApps.map(function (item): RegistrableApp<ObjectType> {
  item.props = {
    baseURL: item.activeRule,
    state: initState
  }
  return item
}))

start({
  prefetch: false,
  // sandbox: {strictStyleIsolation: true}
})
appInstance.mount('#main-app')

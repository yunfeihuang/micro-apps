import { createApp, App as VueApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import {renderWithQiankun, qiankunWindow, QiankunProps} from 'vite-plugin-qiankun/dist/helper';
import { useQiankunStore } from './store/qiankun'

let appInstance: VueApp<Element>;

const renderApp = ({state, baseURL, ...props}: QiankunProps & {baseURL?: string, state?: Record<string, unknown>}) => {
  console.log('vue3 propsprops', props)
  const router = createRouter({
    history: createWebHistory(baseURL || '/'),
    routes: [{
      path: '/',
      component: () => import('./components/HelloWorld.vue')
    }]
  })
  appInstance = createApp(App).use(router).use(createPinia())
  const mountNode = props.container ? props.container.querySelector('#app') as Element : document.querySelector('#app') as Element
  appInstance.mount(mountNode)
}

console.log('qiankunWindow.__POWERED_BY_QIANKUN__', qiankunWindow.__POWERED_BY_QIANKUN__)
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  renderApp({})
} else {
  renderWithQiankun({
    mount(props) {
      console.log('--mount', props);
      renderApp(props)
      appInstance.config.globalProperties.setGlobalState = props.setGlobalState
      const qiankunStore = useQiankunStore()
      qiankunStore.setUser(props.state.user as Record<string, unknown>)
      props.onGlobalStateChange((state: any, prev: any) => {
        // state: 变更后的状态; prev 变更前的状态
        console.log(state, prev);
        qiankunStore.setUser(state.user as Record<string, unknown>)
      });
    },
    bootstrap() {
      console.log('--bootstrap');
    },
    update() {
      console.log('--update');
    },
    unmount(props) {
      console.log('--unmount', props);
      // props?.offGlobalStateChange()
      appInstance?.unmount();
    }
  });
}

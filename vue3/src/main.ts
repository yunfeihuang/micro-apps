import { createApp, App as VueApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import {renderWithQiankun, qiankunWindow, QiankunProps} from 'vite-plugin-qiankun/dist/helper';


let app: VueApp<Element>;

const renderApp = (props: QiankunProps & {baseURL?: string, router?: Record<string, unknown>}) => {
  console.log('propsprops', props)
  const router = createRouter({
    history: createWebHistory(props.baseURL || '/'),
    routes: [{
      path: '/',
      component: () => import('./components/HelloWorld.vue')
    }]
  })
  app = createApp(App).use(router).use(createPinia())
  // app.config.globalProperties.$parentRouter = props.router
  app.mount(props.container ? props.container.querySelector('#app') as Element : document.querySelector('#app') as Element);
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  renderApp({})
} else {
  renderWithQiankun({
    mount(props) {
      console.log('--mount', props);
      props.onGlobalStateChange((state: any, prev: any) => {
        // state: 变更后的状态; prev 变更前的状态
        console.log(state, prev);
      });
      renderApp(props)
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
      app?.unmount();
    }
  });
}

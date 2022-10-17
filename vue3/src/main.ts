import { createApp, App as VueApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import {renderWithQiankun, qiankunWindow} from 'vite-plugin-qiankun/dist/helper';

let app: VueApp<Element>;

const renderApp = (_app = document.getElementById('app') as Element) => {
  app = createApp(App).use(createPinia())
  app.mount(_app);
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  renderApp()
} else {
  renderWithQiankun({
    mount(props) {
      console.log('--mount', props);
      props.onGlobalStateChange((state: any, prev: any) => {
        // state: 变更后的状态; prev 变更前的状态
        console.log(state, prev);
      });
      renderApp(props.container ? props.container.querySelector('#app') as Element : undefined)
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

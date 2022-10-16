import { defineStore } from 'pinia'
import { initGlobalState, MicroAppStateActions } from 'qiankun';

const state = {token: 'token...', user: {name: '张三', age: 20}}
// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
// actions.setGlobalState(state);

export const useGlobalStore = defineStore({
  id: 'global', 
  state: () => state,
  getters: {
    getUser (): any {
      return this.user
    },
    getToken (): string {
      return this.token
    }
  },
  actions: {
    setToken (token: string):void {
      this.token = token
    }
  }
})
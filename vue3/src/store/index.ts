import { defineStore } from 'pinia'
export const useGlobalStore = defineStore({
  id: 'global', 
  state: () => ({token: 'token...', user: {name: '张三', age: 20}}),
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
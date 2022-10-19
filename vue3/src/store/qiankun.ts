import { defineStore } from 'pinia'

const state: {token: string, user: Record<string, unknown>} = {token: 'token...', user: {name: '张三', age: 20}}

export const useQiankunStore = defineStore({
  id: 'qiankun', 
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
    },
    setUser (user: Record<string, unknown>) {
      this.user = user
    }
  }
})
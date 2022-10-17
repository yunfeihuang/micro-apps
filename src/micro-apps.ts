import { ObjectType, RegistrableApp } from "qiankun";

const microApps: RegistrableApp<ObjectType>[] = [
  
  {
    name: 'react',
    entry: import.meta.env.QK_REACT_ENTRY,
    container: '#micro-app2',
    activeRule: '/react'
  },
  {
    name: 'vue',
    entry: import.meta.env.QK_VUE3_ENTRY,
    container: '#micro-app1',
    activeRule: '/vue'
  },
]
console.log('microApps', import.meta.env)
export default microApps

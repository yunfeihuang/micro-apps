import { ObjectType, RegistrableApp } from "qiankun";
const getActiveRule = (hash: string) => (location: any) => location.hash.startsWith(hash);
const microApps: RegistrableApp<ObjectType>[] = [
  {
    name: 'vue',
    entry: import.meta.env.QK_VUE3_ENTRY,
    container: '#micro-app1',
    activeRule: '/vue'
  },
  {
    name: 'react',
    entry: import.meta.env.QK_REACT_ENTRY,
    container: '#micro-app2',
    activeRule: '/react'
  },
  {
    name: 'h5',
    entry: import.meta.env.QK_H5_ENTRY,
    container: '#micro-app3',
    activeRule: '/h5'
  },
]
console.log('microApps', import.meta.env)
export default microApps

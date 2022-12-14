import { Button } from 'antd'
import { useContext, useState } from 'react'
import reactLogo from '@/assets/react.svg';
import { Context } from '../qiankun';

// const reactLogo = new URL('../assets/react.svg', import.meta.url).href

function Home() {
  const [count, setCount] = useState(0)
  const onClick = function () {
    document.dispatchEvent(new CustomEvent('router-link', {detail: '/vue'}))
  }
  const {state, dispatch} = useContext(Context)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 onClick={onClick}>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div onClick={() => dispatch({type: '', payload: {user: {name: '李四', age: Math.round((Math.random() * 100))}}})}>全局数据(单击修改数据)：{JSON.stringify(state.user)}</div>
      <a href="/vue" target="router-link">基座跳转Vue应用</a>
    </div>
  )
}
Home.displayName = 'Home'
export default Home

import { Button } from 'antd'
import { useContext, useState } from 'react'
import reactLogo from '@/assets/react.svg';
import { QiankunContext } from '../qiankun';

// const reactLogo = new URL('../assets/react.svg', import.meta.url).href

function Home() {
  const [count, setCount] = useState(0)
  const onClick = function () {
    document.dispatchEvent(new CustomEvent('router-link', {detail: '/vue'}))
  }
  const {state, setGlobalState} = useContext(QiankunContext)

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
      <div className="card" onClick={() => setGlobalState({user: {name: '李四', age: (Math.random() * 100)}})}>
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
      <div>全局数据：{JSON.stringify(state.user)}</div>
      <a href="/vue" target="router-link">Vue3</a>
    </div>
  )
}
Home.displayName = 'Home'
export default Home

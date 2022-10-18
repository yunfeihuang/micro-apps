import { Button } from 'antd'
import { MouseEvent, useState } from 'react'
import reactLogo from '../assets/react.svg'

function Home() {
  const [count, setCount] = useState(0)
  const onClick = function (event: MouseEvent) {
    const e = new Event('link')
    event.target.dispatchEvent(e)
  }
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
      <h1>Vite + React</h1>
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
      <button onClick={onClick}>Vue3</button>
      <a href="/vue" target="_qiankun">Vue3</a>
    </div>
  )
}
Home.displayName = 'Home'
export default Home

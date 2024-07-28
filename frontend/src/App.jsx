import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <a href='/'>amazona</a>
        </header>
        <main>list products</main>
      </div>
    </>
  )
}

export default App

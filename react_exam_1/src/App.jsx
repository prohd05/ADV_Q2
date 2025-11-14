import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './comp/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card i='http://www.w3.org/2000/svg'/>
    </>
  )
}

export default App

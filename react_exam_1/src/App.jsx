import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './comp/card.jsx'
import SecretMessage from './comp/SecretMessage.jsx'
import Challenege from './comp/Challenege.jsx'

function App() {
  return (
    <>
      <Challenege/>
      <SecretMessage/>
    </>
  )
}

export default App

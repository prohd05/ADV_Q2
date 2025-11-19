import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
import Card2 from './components/card2.jsx'
import Card3 from './components/card3.jsx'
import Navbar from './components/navbar.jsx'


function App() {
  return (
    <div className='cardContainer'>
    <Navbar/>
    <div className='card_container'>
    <Card3
    src="data:image/jpeg;base64,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"
    name="Nike Pro Max"
    desc="Comfort"
    price="190"/>
    </div>

    <Card/>
    <Card2 na={"I.S."} cl={"APFIT"} ex={"react"} gr={78}/>
    <Card2 na={"I.V."} cl={"APFIT"} ex={"react"} gr={80}/>
    <Card2 na={"J.M."} cl={"APFIT"} ex={"react"} gr={100}/>
    <Card2 na={"B.A."} cl={"APFIT"} ex={"react"} gr={0}/>
    <Card2 na={"M.S."} cl={"APFIT"} ex={"react"} gr={95}/>

    <h1> This is my first day with React </h1>
    <p> Merques Enoe </p>

    </div>
  )
}

export default App
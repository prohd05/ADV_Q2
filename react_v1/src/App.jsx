import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
import Card2 from './components/Card2.jsx'
import Navbar from './components/navbar.jsx'
import Toggle from './components/toggle.jsx'
import Form from './components/form.jsx'




function App() {
  return (
    <div className='cardContainer'>
     <Navbar/>
    <Toggle/>
    

    <h1> This is my first day with React </h1>
    <p> Merques Enoe </p>
    

    <Card/>
    <Card2 na={"I.S."} cl={"APFIT"} ex={"react"} gr={78}/>
    <Card2 na={"I.V."} cl={"APFIT"} ex={"react"} gr={80}/>
    <Card2 na={"J.M."} cl={"APFIT"} ex={"react"} gr={100}/>
    <Card2 na={"B.A."} cl={"APFIT"} ex={"react"} gr={0}/>
    <Card2 na={"M.S."} cl={"APFIT"} ex={"react"} gr={95}/>
    </div>
  )
}

export default App
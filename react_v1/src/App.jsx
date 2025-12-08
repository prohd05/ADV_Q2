import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
import Card2 from './components/Card2.jsx'
import Navbar from './components/navbar.jsx'
import Toggle from './components/toggle.jsx'
import Form from './components/form.jsx'
import LearnUseEffect from './components/learnUseEffect.jsx'
import GetUsers from './components/getUsers.jsx'
import GetImage from './components/getImage.jsx'
import FRQLab from './components/FRQLab.jsx'
import LearnUseRef from './components/learnUseRef.jsx'
import ReloadImage from './components/ImageReloader.jsx'




function App() {
  return (
    <div className='cardContainer'>
     <Navbar/>
     <ReloadImage/>
    
    <LearnUseRef/>
    <LearnUseEffect/>

    <h1> This is my first day with React </h1>
    <p> Merques Enoe </p>
    
    <Card/>
    <Card2 na={"I.S."} cl={"APFIT"} ex={"react"} gr={78}/>

    <Toggle/>
    <FRQLab/>

    <Form/>
    <GetUsers/>
    <GetImage/>
    </div>
  )
}

export default App
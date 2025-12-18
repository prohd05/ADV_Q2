import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import BookCard from './components/BookCard.jsx'
import Navbar from './components/Navbar.jsx'
import Loader from './components/Loader.jsx'

import Home from './pages/Home.jsx'
import BookDetails from './pages/BookDetails.jsx'
import AddBook from './pages/AddBook.jsx'
import Settings from './pages/Settings.jsx'

import ThemeContext from './context/ThemeContext.jsx'

function App() {

  return (
    <>
    
    <Navbar/>

    <BookCard
      idf={1} ti={"The React Journey"} au={"Alex Morgan"} gen={"Technology"} desc={"An introduction to React concepts including components, props, state, and hooks."} av={true}
    />

    <BookCard idf={2} ti={"Priya Patel"} au={"Priya Patel"} gen={"Programming"} desc={"A practical guide to JavaScript basics such as variables, functions, arrays, and objects."} av={true}/>

    <BookCard idf={3} ti={"CSS for Modern Web Design"} au="Liam Chen" gen={"Web Design"} desc={"Learn how to build responsive and visually appealing websites using modern CSS techniques."} av={false}/>
    </>
  )
}

export default App

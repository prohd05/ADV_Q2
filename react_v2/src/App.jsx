import { useState, useRef, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './comp/navbar.jsx'
import Student1 from './pages/merques.jsx'
import Student2 from './pages/bryan.jsx'
import Goals from './pages/goals.jsx'
import Default from './comp/Default.jsx'
import TopNavbar from './comp/topNavbar.jsx'
import MyCard from './comp/myCard.jsx'

import Todo from './Labs/Todo.jsx'
import TodoList from './Labs/TodoList.jsx'
import AddTodo from './Labs/AddTodo.jsx'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [todos, setTodos] = useState([]);
  return (
    <>

    <br/>

    <TopNavbar/>
    <MyCard/>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Default/>} />
      <Route path='/merques' element={<Student1/>}/>
      <Route path='/bryan' element={<Student2/>}/>
      <Route path='/goals' element={<Goals/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

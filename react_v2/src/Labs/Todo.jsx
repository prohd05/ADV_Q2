import { useState} from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
// Parent of the Todo List

function Todo(task){
    
    return(
        <>
        <AddTodo/>
        <TodoList/>
        </>
    )
}

export default Todo
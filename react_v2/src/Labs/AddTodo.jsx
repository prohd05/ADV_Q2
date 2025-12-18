import { useState } from "react";

function AddTodo(task, setTodo){

    // Created a state varible to store the input text
    const [text, setText] = useState("")

    // created an arrrow function 
    const submitTask=()=>{
        // in order to append a new item in an array, we must destructure the array with "..." spread operator
        // The spread operator creats a copy of the array
        setTodo(...task, text);
        setText("")
    }

    return(
        <>
        <h2> Add todo component</h2>

        <input type="text" placeholder="Add Task" value={text} onChange={e=>setText(e.target.value)} />
        <button onClick={submitTask}> Add Task </button>
        </>
    )
}
export default AddTodo

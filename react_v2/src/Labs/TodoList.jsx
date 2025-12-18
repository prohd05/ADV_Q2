function TodoList(tasks){
    // If "tasks" length is empty then show "No Tasks Yet" 
    return(
        <>
        <h2> Todo </h2>

        {/* Teranry operator */}
        {tasks.length==0?<p> No taks yet </p>: 
        <ul> 
            {tasks.map(
                (index,key)=>{
                    <li key={key}> {index} </li>
                }
            )}
        </ul>}
        </>
    )
}
export default TodoList

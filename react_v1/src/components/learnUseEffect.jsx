import {useState, useEffect} from 'react'

function learnUseEffect(){

    const [count, setCount]=useState(0);
    const increment=()=>{setCount(count+1);}
    
    useEffect(
        // An arrow function 
        ()=>{ console.log("useEffect called " + count + " times")}, 
        //Cleanup function which was shown as a return function in video
        //()=>{}, 

        //Never update the state varible that you are watching in the dependency array.

        //Dependency array
        [count]
    )

    return(
        <>
        <div style={{backgroundColor:"white", border:"1px solid black"}}>
           <h1> I am learning about useEffect hook in React.js</h1> 
           <button onClick={increment}> Click</button>
        </div>
        </>
    )
}

export default learnUseEffect;
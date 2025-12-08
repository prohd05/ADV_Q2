import {useRef, useState, useEffect} from 'react'

// Create a counter using useRef that logs the count to the console every time a button is clicked, without re-rendering.
// I will have a button & I will use the onClick to trigger a function that increments the count and logs it to the console.
//Create an input field and a button. When the button is clicked, the input should gain focus.

function learnUseRef(){

    const count = useRef(0);
    const updateCount = () => {
        count.current+=1;
        console.log(count.current);
    }

    const focusRef = useRef(null);
    const focusMe = () => {
        focusRef.current.focus();
    }

    return(
        <>
            <h2> Using useRef for the first time </h2>
            <button onClick={updateCount}> Click me to update</button>
            <br/> <br/>

            <input ref={focusRef} type='text' name='input'/> <br/>
            <button onClick={focusMe}> Foucs </button>
            <br/><br/>
        </>
    )
}

export default learnUseRef;
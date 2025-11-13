import React from 'react'

function card() {
    {/* I am declaring a variable x and assigning it the value 0*/}
    const [x, setX] = React.useState(0);
    {/* UseState is a react hook */}
    function add() {
        setX(x + 1);
    }
  return (
    <div>
      <p> This is my Card </p>
      {/*Note 1: In order to use javascript within jsx, we must enclose everything in curlybraces{} */}
      <p> {x} </p>
      {/*Note 2: Inside of using getElementByID and adding an event listner, I can directly use onClick to trigger a function*/}
      {/*Note 3: When calling a function inside JS, yo don't put parentheses() */}
      <button onClick={add}> Inside number </button>
    </div>
  )
}

export default card
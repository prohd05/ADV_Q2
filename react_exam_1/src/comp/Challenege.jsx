import { useState } from 'react';

function Challenege() {
  const [count, setCount] = useState(0);

  function add(){
    if (count < 10){
      setCount(count + 1);
    }
  }

  function sub(){
    if (count > 0){
    setCount(count - 1);
    }
  }

  function number(){
    if (count == 0){
      {{backgroundColor:'blue'}}
      return <p> Starting Line </p>
      
    }
    else if (count == 5){
      return <p> Half Way</p>
    }
    else if (count == 10){
      return <p> End of the Road</p>
    }
    else{
      return <p> </p>
    }
  }

  return(
    <div style={{display:'flex', backgroundColor:'white', border:'1px solid black', padding:'10px', borderRadius:'25px'}}>
      <button onClick={sub} style={{backgroundColor: count== 0 ? 'red' : 'green', color:'black'}}> - </button>
      <p style={{color:'black', margin:'15px'}}> {count} {number()} </p>
      <button onClick={add} style={{backgroundColor: count== 10 ? 'red' : 'green', color:'black'}}> + </button>
    </div>
  )
  }
  
  
  export default Challenege;

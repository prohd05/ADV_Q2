import { useState } from "react"

function Toggle(){
    const [toggled, setToggled] = useState(true);
    const changeToggle=()=>{setToggled(!toggled)}

    return(
        <>
        <button onClick={changeToggle}> {toggled?'Toggle':'Already Toggled'} </button>
        {!toggled && <p> This is the togged text </p>}
        </>
    )
}

export default Toggle;
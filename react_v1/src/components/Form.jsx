import { useState } from "react";

function Form(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const submitFormHandler=(event)=>{
        event.preventDefault();
        console.log("Name: " + name + " Email: " + email)
    }
    return(
        <div>
            <form>
                <label> Name </label>
                <input type="text" name="name" onChange={(event) => setName(event.target.value)}> </input> <br/>

                <label> Email </label>
                <input type="email" name="email" onChange={(event) => setName(event.target.value)}> </input> <br/>

                <button type="submit" onClick={submitFormHandler}> Submit</button>
            </form>
        </div>
    )
}

export default Form
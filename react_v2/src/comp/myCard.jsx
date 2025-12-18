import { useContext } from "react"
import { themeContext } from "./themeContext"

function myCard(){
    const {theme, toggleTheme} = useContext(themeContext);

    return(
        <div
        style={{
            backgroundColor:theme==="light"?"purple":"green", border:"1px solid black"
        }}>
        <h2> My Card Component </h2>
        <p> This is a simple card component in React. </p>
        <button onClick={toggleTheme}> Change backgroundColor </button>
        </div>
    )
}

export default myCard
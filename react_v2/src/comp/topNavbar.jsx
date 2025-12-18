import { useContext } from "react"
import { themeContext } from "./themeContext"

function topNavbar(){
    
    const {theme, toggleTheme} = useContext(themeContext)

    return(
        <>
            <nav style={{
                padding:"10px", backgroundColor:theme==="light"?"red":"blue"
                }}>
                <p> Current Theme: {theme} </p>
                <button onClick={toggleTheme}>
                    Toggle
                </button>
            </nav>
        </>
    )
}

export default topNavbar
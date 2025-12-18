import { createContext, useState } from "react";

export const tContext = createContext();

function ThemeContext(){

    const [mTheme, setMTheme] = useState("light")

    const toggleTheme = () => {
        setMTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
    
    return(
        <>
        <tContext>

        </tContext>
        </>
    )
}

export default ThemeContext

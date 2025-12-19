import { createContext, useState } from "react";

export const tContext = createContext();

function ThemeContext() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <>
            <tContext.Provider value={{ theme, setTheme, toggleTheme }}>
            </tContext.Provider>
        </>
    );
}

export default ThemeContext;
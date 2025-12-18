import { createContext, useContext, useState } from "react";

export const themeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light"); // create a useState to hold the theme value

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <>
            <themeContext.Provider value={{ theme, setTheme, toggleTheme }}>
                {/* Children components will go here */}
                {children}
            </themeContext.Provider>
        </>
    );
}

export default ThemeProvider;
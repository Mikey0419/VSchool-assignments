import {createContext, useState} from 'react'

const ThemeContext = createContext()


function ThemeContextProvider(props) {
    const [theme, setTheme] = useState("light")

    function toggleTheme() {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}
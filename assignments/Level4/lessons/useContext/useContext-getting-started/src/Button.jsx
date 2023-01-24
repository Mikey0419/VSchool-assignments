import { useContext } from "react"
import {ThemeContext} from "./contextProvider"

function Button() {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <button className={`${theme}-theme`} onClick={toggleTheme}>{theme === "light" ? "Dark" : "Light"} Theme</button>
    )
}

export default Button
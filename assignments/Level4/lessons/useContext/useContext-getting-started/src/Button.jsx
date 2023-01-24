import { useContext } from "react"
import {ThemeContext} from "./contextProvider"

function Button() {

    const {theme, toggleTheme} = useContext(ThemeContext)

    console.log(theme)

    return(
        <button className={`${theme}-theme`} onClick={toggleTheme}>Click here</button>
    )
}

export default Button
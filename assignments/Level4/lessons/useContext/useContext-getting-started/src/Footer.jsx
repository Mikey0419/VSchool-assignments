import { useContext } from "react"
import {ThemeContext} from "./contextProvider"

function Footer() {

    const {theme} = useContext(ThemeContext)

    return(
        <div className={`${theme}-footer`}>
            <p>Footer</p>
        </div>
    )
}

export default Footer;
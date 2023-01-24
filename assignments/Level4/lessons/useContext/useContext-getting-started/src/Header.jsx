import {useContext} from 'react'
import {ThemeContext} from './contextProvider'

function Header() {

    const {theme} = useContext(ThemeContext)

    return(
        <div className={`${theme}-header`}>
            <p>Home</p>
            <p>Contact</p>
            <p>About</p>
        </div>
    )
}

export default Header;
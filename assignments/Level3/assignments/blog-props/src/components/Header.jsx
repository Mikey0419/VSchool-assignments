import './header.css'
import Navbar from './Navbar'

function Header() {
    return(
        <>
            <div className="overlay">
                <Navbar />
            </div>
            <div className="header"></div>
        </>
    )
}

export default Header
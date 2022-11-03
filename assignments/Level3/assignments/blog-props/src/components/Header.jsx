import './header.css'
import Navbar from './Navbar'
import "@fontsource/open-sans";

function Header() {
    return(
        <>
            <div className="overlay">
                <Navbar />
            </div>
            <div className="header">
                <h1 className="hero-text">Clean Blog</h1>
            </div>
        </>
    )
}

export default Header
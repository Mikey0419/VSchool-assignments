import './navbar.css'

function Navbar() {
    return(
        <div className="nav-container">
            <a className="nav-link" href="#">Start Bootstrap</a>
            <ul className="nav-list">
                <li>home</li>
                <li>about</li>
                <li>sample post</li>
                <li>contact</li>
            </ul>
        </div>
    )
}

export default Navbar
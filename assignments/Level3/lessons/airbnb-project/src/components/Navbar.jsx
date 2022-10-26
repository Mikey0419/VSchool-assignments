import logo from '../assets/airbnb-logo.png';
import './navbar.css';

function Navbar() {
    return(
        <div className="navbar">
            <img src={logo} className="airbnb--logo"></img>
        </div>
    )
}

export default Navbar;
import image from '../assets/photo_grid.png';
import './hero.css';

function Hero() {
    return(
        <div className="hero-container">
            <img className="hero-image" src={image} alt="AirBnB image"></img>
            <h1 className="heading">Online Experiences</h1>
        </div>
    )
}

export default Hero;
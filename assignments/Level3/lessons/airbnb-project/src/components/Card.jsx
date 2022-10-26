import './card.css';
import cardImage from '../assets/swimmer.png';
import star from '../assets/star.png';

function Card() {
    return(
        <div className="card-container">
            <div className="image-container">
                <img className="card-image" src={cardImage}></img>
                <p className="image-tag">SOLD OUT</p>
            </div>
            <div className="star-rating-container">
                <img className="star" src={star}></img>
                <p className="rating">5.0&nbsp;</p>
                <p className="reviews">6</p>
                <p className="country">&nbsp;USA</p>
            </div>
            <p className="description">Life lessons with Katie Zaferes</p>
            <p className="pricing"><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;
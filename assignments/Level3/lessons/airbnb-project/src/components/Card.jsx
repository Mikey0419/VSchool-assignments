import './card.css';
import star from '../assets/star.png';

function Card(props) {
    return(
        <div className="card-container">
            <div className="image-container">
                <img className="card-image" alt={props.description} src={props.coverImg}></img>
                <p className="image-tag">{props.available}</p>
            </div>
            <div className="star-rating-container">
                <img className="star" src={star}></img>
                <p className="rating">{props.rating}&nbsp;</p>
                <p className="reviews">{props.reviewCount}</p>
                <p className="country">&nbsp;{props.location}</p>
            </div>
            <p className="description">{props.title}</p>
            <p className="pricing"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;
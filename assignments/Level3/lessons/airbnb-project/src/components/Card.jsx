import './card.css';
import star from '../assets/star.png';

function Card(props) {
    return(
        <div className="card-container">
            <div className="image-container">
                <img className="card-image" src={props.imgUrl}></img>
                <p className="image-tag">{props.status}</p>
            </div>
            <div className="star-rating-container">
                <img className="star" src={star}></img>
                <p className="rating">{props.rating}&nbsp;</p>
                <p className="reviews">{props.reviews}</p>
                <p className="country">&nbsp;{props.country}</p>
            </div>
            <p className="description">{props.title}</p>
            <p className="pricing"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;
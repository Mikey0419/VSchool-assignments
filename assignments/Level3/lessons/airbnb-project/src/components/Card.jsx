import './card.css';
import star from '../assets/star.png';

function Card(props) {
    return(
        <div className="card-container">
            <div className="image-container">
                <img className="card-image" alt={props.item.description} src={props.item.coverImg}></img>
                <p className="image-tag">{props.available}</p>
            </div>
            <div className="star-rating-container">
                <img className="star" src={star}></img>
                <p className="rating">{props.item.stats.rating}&nbsp;</p>
                <p className="reviews">{props.item.stats.reviewCount}</p>
                <p className="country">&nbsp;{props.item.location}</p>
            </div>
            <p className="description">{props.item.title}</p>
            <p className="pricing"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card;
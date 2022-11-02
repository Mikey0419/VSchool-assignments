import './blogcard.css'
import "inter-ui/inter.css";

function BlogCard(props) {
    return(
        <div class="card-container">
            <img src={props.item.imageUrl} />
            <div class="card-content-container">
                <div class="card-content-location">
                    <span className="icon-location"></span>
                    <p className="location">{props.item.location}</p>
                    <a className="location-url" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="location-title">{props.item.title}</h1>
                <p className="location-dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="location-description">{props.item.description}</p>
            </div>
        </div>
    )
}

export default BlogCard
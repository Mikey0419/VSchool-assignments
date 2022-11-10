import './pet.css'

/*

props.item.pets.name
props.item.pets.breed

*/

function Pet(props) {

    console.log(props.item.imgUrl)

    return(
        <div className="icon-container">
            <img className="icon" src={props.item.imgUrl} />
            <p>{props.item.name}</p>
        </div>
    )
}

export default Pet
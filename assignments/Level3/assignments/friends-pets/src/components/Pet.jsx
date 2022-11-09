import './pet.css'

/*

props.item.pets.name
props.item.pets.breed

*/

function Pet(props) {
    return(
        <p>{props.item.name}, {props.item.breed}</p>
    )
}

export default Pet
import './pet.css'

/*

props.item.pets.name
props.item.pets.breed

*/

function Pet(props) {
    return(
        <p>{props.item.pets.name} - {props.item.pets.breed}</p>
    )
}

export default Pet
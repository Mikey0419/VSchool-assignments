import Pet from '../components/Pet'
import './friend.css'

/*

item.name
item.age

item.pets.name
item.pets.breed

*/


function Friend(props) {

    const petInfo = props.pet.map((item, index) => {
        return(
            <Pet key={index} item={item} />
        )
    })

    return(
        <div className="friend-card">
            <p>{props.item.name} ({props.item.age})</p>
            <div className="pet-section">
                {petInfo}
            </div>
            <hr />
        </div>
    )
}

export default Friend
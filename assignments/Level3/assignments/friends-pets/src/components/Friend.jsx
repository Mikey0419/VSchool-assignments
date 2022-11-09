import Pet from '../components/Pet'
import data from '../data'
import './friend.css'

/*

item.name
item.age

item.pets.name
item.pets.breed

*/


function Friend(props) {

    const petInfo = data.map((index, item) => {
        return(
            <Pet key={index} item={item} />
        )
    })

    return(
        <div className="friend-card">
            <p>{props.item.name}</p>
            <div className="pet-section">
                {petInfo}
            </div>
        </div>
    )
}

export default Friend
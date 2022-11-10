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
        <div className="container">
            <div className="friend-card">
                <img className="pic" src={props.item.imgUrl} />
                <h1>{props.item.name} <span className="age">({props.item.age})</span></h1>
                <div className="pet-section">
                    {petInfo}
                </div>
            </div>
        </div>
    )
}

export default Friend
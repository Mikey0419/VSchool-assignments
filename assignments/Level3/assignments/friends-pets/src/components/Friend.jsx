import Pet from '../components/Pet'
import data from '../data'
import './friend.css'

function Friend(props) {

    const petInfo = data.map((index, item) => {
        return(
            <Pet key={index} item={item} />
        )
    })

    return(
        <div className="friend-card">
            <p>Friend and Pet info</p>
            <div className="pet-section">
                {petInfo}
            </div>
        </div>
    )
}

export default Friend
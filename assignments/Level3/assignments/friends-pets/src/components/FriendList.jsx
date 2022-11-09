import Friend from '../components/Friend'
import data from '../data'
import './list.css'

function FriendList() {
    const friend = data.map((item, index) => {
        console.log(index)
        return(
            <Friend key={index} item={item} pet={item.pets} />
        )
    })

    return(
        <>
            {friend}
        </>
    )
}

export default FriendList
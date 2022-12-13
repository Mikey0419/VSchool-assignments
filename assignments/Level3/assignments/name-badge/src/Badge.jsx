import './badge.css'

function Badge(props) {
    const newPhone = () => {
        let digits = props.item.phone;

        let areaCode = digits.slice(0, 3)
        let firstThree = digits.slice(3, 6)
        let lastFour = digits.slice(6)
        let final = `${areaCode}-${firstThree}-${lastFour}`

        return final
    }

    const phone = newPhone()

    return(
        <div className="badge-container">
            <div id={props.item.badgeColor} className="header">Hello, my name is ...</div>
            <p>Name: {props.item.firstName} {props.item.lastName}</p>
            <p>Phone: {phone}</p>
            <p>Born: {props.item.birthPlace}</p>
            <p>Favorite food: {props.item.favoriteFood}</p>
            <p>Email: {props.item.email}</p>
            <p>About: <p className="about">{props.item.about}</p></p>
        </div>
    )
}

export default Badge
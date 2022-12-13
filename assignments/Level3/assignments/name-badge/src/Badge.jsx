function Badge(props) {
    console.log("badge")

    return(
        <div className="badge-container">
            <p>Name: {props.item.firstName} {props.item.lastName}</p>
            <p>Phone: {props.item.phone}</p>
            <p>Place of birth: {props.item.birthPlace}</p>
        </div>
    )
}

export default Badge
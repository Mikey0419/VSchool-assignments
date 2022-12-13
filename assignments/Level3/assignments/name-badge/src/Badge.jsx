function Badge(props) {
    console.log("badge")

    return(
        <div className="badge-container">
            Name: {props.item.firstName} {props.item.lastName}<br />
            Phone: {props.item.phone}
        </div>
    )
}

export default Badge
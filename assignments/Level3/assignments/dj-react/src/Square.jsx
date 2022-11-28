import './square.css'

function Square(props) {
    console.log(props.color)

    return(
        <div className={props.color} id="square"></div>
    )
}

export default Square
import './square.css'

function Square(props) {
    return(
        <div className={props.color} id="square"></div>
    )
}

export default Square
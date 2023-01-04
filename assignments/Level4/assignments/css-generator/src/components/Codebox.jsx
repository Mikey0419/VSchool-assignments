import './codebox.css'

function Codebox(props) {
    return(
            <code className="codebox">
            background: linear-gradient({props.angle}, {props.firstColor}, {props.secondColor})<br />
            -moz-background: linear-gradient({props.angle}, {props.firstColor}, {props.secondColor})<br />
            -webkit: linear-gradient({props.angle}, {props.firstColor}, {props.secondColor})
            </code>
    )
}

export default Codebox
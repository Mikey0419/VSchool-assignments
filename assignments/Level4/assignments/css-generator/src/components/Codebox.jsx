function Codebox(props) {
    return(
        <textarea>
            <code>
            background: linear-gradient({props.angle}, {props.firstColor}, {props.secondColor}),
            '-moz-background': linear-gradient({props.angle}, {props.firstColor}, {props.secondColor}),
            '-webkit': linear-gradient({props.angle}, {props.firstColor}, {props.secondColor})
            </code>
        </textarea>
    )
}

export default Codebox
import './gradient.css'

function Gradient(props) {

    const styles = {
        background: linear-gradient(props.angle, props.firstColor, props.secondColor),
        '-moz-background': linear-gradient(props.angle, props.firstColor, props.secondColor),
        '-webkit': linear-gradient(props.angle, props.firstColor, props.secondColor)
    }

    return(
        <div style={styles} className="gradient-box">
            Stuff goes here
        </div>
    )
}

export default Gradient
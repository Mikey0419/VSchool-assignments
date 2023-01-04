import './gradient.css'

function Gradient(props) {

    const styles = {
        background: `linear-gradient(${props.angle}deg, ${props.firstColor}, ${props.secondColor})`,
    }

    return(
        <div style={styles} className="gradient-box">
        </div>
    )
}

export default Gradient
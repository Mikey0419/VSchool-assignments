import './gradient.css'

function Gradient(props) {

    const colorArray = [...props.colors];
    const arrLength = props.colors.length;
    let gradientCode =`linear-gradient(${props.angle}deg, `;

    for(let i = 0; i < arrLength; i++) {
        (i !== arrLength - 1) ? gradientCode += `${colorArray[i]}, ` : gradientCode += `${colorArray[i]})`
    }

    const styles = {
        background: gradientCode
    }

    return(
        <div style={styles} className="gradient-box">
        </div>
    )
}

export default Gradient
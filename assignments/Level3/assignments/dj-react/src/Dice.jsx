import './dice.css'
import one from './assets/1.png'
import two from './assets/2.png'
import three from './assets/3.png'
import four from './assets/4.png'
import five from './assets/5.png'
import six from './assets/6.png'

function Dice(props) {
    console.log("Dice");

    if(props.item.value === 1) {
        return(
            <img className="dice" src={one} />
        )
    } else if (props.item.value === 2) {
        return(
            <img className="dice" src={two} />
        )
    } else if (props.value === 3) {
        return(
            <img className="dice" src={three} />
        )
    } else if (props.value === 4) {
        return(
            <img className="dice" src={four} />
        )
    } else if (props.value === 5) {
        return(
            <img className="dice" src={five} />
        )
    } else {
        return(
            <img className="dice" src={six} />
        )
    }
}

export default Dice;
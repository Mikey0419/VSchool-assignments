import './dice.css'
import one from './assets/1.png'
import two from './assets/2.png'
import three from './assets/3.png'
import four from './assets/4.png'
import five from './assets/5.png'
import six from './assets/6.png'

function Dice(props) {
    console.log("Dice");

    let selected = props.item.selected;

    let selectYN = (selected) ? "selected" : "notselected";

    if(props.item.value === 1) {
        return(
            <img className="dice" id={selectYN} src={one} name={props.item.diceIndex} />
        )
    } else if (props.item.value === 2) {
        return(
            <img className="dice" id={selectYN} src={two} name={props.item.diceIndex} />
        )
    } else if (props.item.value === 3) {
        return(
            <img className="dice" id={selectYN} src={three} name={props.item.diceIndex} />
        )
    } else if (props.item.value === 4) {
        return(
            <img className="dice" id={selectYN} src={four} name={props.item.diceIndex} />
        )
    } else if (props.item.value === 5) {
        return(
            <img className="dice" id={selectYN} src={five} name={props.item.diceIndex} />
        )
    } else {
        return(
            <img className="dice" id={selectYN} src={six} name={props.item.diceIndex} />
        )
    }
}

export default Dice;
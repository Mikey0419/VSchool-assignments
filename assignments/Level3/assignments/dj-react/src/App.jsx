import { useState } from 'react'
import './App.css'
import Square from './Square'
import sound from './assets/sound.mp3'
import Dice from './Dice'

let ding = new Audio(sound);
const arrColors = ["red", "orange", "yellow", "green", "blue", "purple", "white", "black"];

function App() {
  const [colors, setColors] = useState(["white", "white", "white", "white"])
  const [dice, setDice] = useState([
    {
      diceIndex: 0,
      selected: false,
      value: 1
    },
    {
      diceIndex: 1,
      selected: false,
      value: 1
    },
    {
      diceIndex: 2,
      selected: false,
      value: 1
    },
    {
      diceIndex: 3,
      selected: false,
      value: 1
    },
    {
      diceIndex: 4,
      selected: false,
      value: 1
    },
    {
      diceIndex: 5,
      selected: false,
      value: 1
    }
])

  const [count, setCount] = useState(0);

  function randomColor() {
    let num = Math.floor(Math.random() * arrColors.length);
    return arrColors[num];
  }

  function smallTimeDJ() {
    playSound();
    (colors[0] === "white") ? setColors(["black", "black", "black", "black"]) : setColors(["white", "white", "white", "white"]);
  }

  function partyDJ() {
    playSound();
    let newArr = [...colors];
    newArr[0] = "purple"; newArr[1] = "purple";
    setColors(newArr);
  }

  function professionalDJ(e) {
    playSound();
    let index = e.target.name;
    let newArr = [...colors];

    (index === "bottom-left") ? (newArr[2] = "blue", setColors(newArr)) : (newArr[3] = "blue", setColors(newArr));
  }

  function bigTimeDJ(e) {
    playSound();
    let index = e.target.name;
    let newArr = [...colors];
    let newColor = randomColor();

    newArr[index - 1] = newColor;
    setColors(newArr);
  }

  function playSound() {
	  ding.play();
  }

  function resetDice() {
    let newArr = [...dice];

    for(let i = 0; i < dice.length; i++) {
      newArr[i].value = 1;
      newArr[i].selected = false;
    }

    setDice(newArr);
  }

  function rollDice() {
    let tempCount = count;
    ((tempCount - 1) % 3 === 0) ? resetDice() : '';

    console.log(dice.length)
    setCount(c => c + 1)
  }

  const colorComponents = colors.map((item, index) => {
    return(
      <Square key={index} index={index} color={item} />
    )
  })

  const diceComp = dice.map((item, index) => {
    return (
      <Dice key={index} item={item} />
    )
  })

  return (
    <div className="container">
      <div className="square-container">
        {colorComponents}
      </div>
      <div className="buttons-container">
        <button onClick={smallTimeDJ}>DJ Small</button>
        <button onClick={partyDJ}>Party DJ</button>
        <button name="bottom-left" onClick={professionalDJ}>Bottom Left</button>
        <button name="bottom-right" onClick={professionalDJ}>Bottom Right</button>
        <button name="1" onClick={bigTimeDJ}>Big Time 1</button>
        <button name="2" onClick={bigTimeDJ}>Big Time 2</button>
        <button name="3" onClick={bigTimeDJ}>Big Time 3</button>
        <button name="4" onClick={bigTimeDJ}>Big Time 4</button>
      </div>
      <div className="dice-container">
        {diceComp}
      </div>
          <button onClick={rollDice}>Roll 'em!</button>
    </div>
  )
}

export default App

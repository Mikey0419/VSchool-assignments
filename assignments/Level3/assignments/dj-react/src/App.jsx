import { useState } from 'react'
import './App.css'
import Square from './Square'
import sound from './assets/sound.mp3'

let ding = new Audio(sound);
const arrColors = ["red", "orange", "yellow", "green", "blue", "purple", "white", "black"];

function App() {
  const [colors, setColors] = useState(["white", "white", "white", "white"])

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

  const colorComponents = colors.map((item, index) => {
    return(
      <Square key={index} index={index} color={item} />
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
    </div>
  )
}

export default App

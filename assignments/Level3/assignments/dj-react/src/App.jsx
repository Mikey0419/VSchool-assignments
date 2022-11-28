import { useState } from 'react'
import './App.css'
import Square from './Square'

function App() {
  const [colors, setColors] = useState(["white", "white", "white", "white"])

  function smallTimeDJ() {
    playSound();
    (colors[0] === "white") ? setColors(["black", "black", "black", "black"]) : setColors(["white", "white", "white", "white"]);
  }

  function partyDJ() {
    playSound();
  }
  function professionalDJ() {
    playSound();
  }
  function bigTimeDJ(e) {
    playSound();
    console.log(e.target.name)
  }
  function playSound() {
    console.log("\n\t\tSOUND\n");
    
    let ding = new Audio('./assets/sound.mp3');
	  ding.play();
  }

  const colorComponents = colors.map((item, index) => {
    return(
      <Square key={index} color={item} />
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
        <button onClick={professionalDJ}>Bottom Left</button>
        <button onClick={professionalDJ}>Bottom Right</button>
        <button name="1" onClick={bigTimeDJ}>Big Time 1</button>
        <button name="2" onClick={bigTimeDJ}>Big Time 2</button>
        <button name="3" onClick={bigTimeDJ}>Big Time 3</button>
        <button name="4" onClick={bigTimeDJ}>Big Time 4</button>
      </div>
    </div>
  )
}

export default App

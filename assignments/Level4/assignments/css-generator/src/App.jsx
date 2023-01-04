import { useState } from 'react'
import Gradient from './components/Gradient'
import Codebox from './components/Codebox'
import './App.css'

function App() {

  const [inputColors, setInputColors] = useState({
    firstColor: "#FFF",
    secondColor: "#000",
    angle: "90"
  });

  return (
    <div className="container">
      <div className="left-side">
        <Gradient firstColor={inputColors.firstColor} secondColor={inputColors.secondColor} angle={inputColors.angle} />
        <Codebox firstColor={inputColors.firstColor} secondColor={inputColors.secondColor} angle={inputColors.angle} />
      </div>
      <div className="right-side">
        <p>input stuff goes here</p>
      </div>
    </div>
  )
}

export default App

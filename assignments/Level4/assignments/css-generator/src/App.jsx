import { useState } from 'react'
import Gradient from './components/Gradient'
import Codebox from './components/Codebox'
import './App.css'

function App() {
  const [colorFirst, setColorFirst] = useState("#FFF");
  const [colorSecond, setColorSecond] = useState("#000");

  const [inputColors, setInputColors] = useState({
    firstColor: "",
    secondColor: "",
    angle: ""
  });

  const [angle, setAngle] = useState(0);

  return (
    <div className="container">
      <div className="left-side">
        <Gradient firstColor={colorFirst} secondColor={colorSecond} angle={angle} />
        <Codebox firstColor={colorFirst} secondColor={colorSecond} angle={angle} />
      </div>
      <div className="right-side">
        <p>input stuff goes here</p>
      </div>
    </div>
  )
}

export default App

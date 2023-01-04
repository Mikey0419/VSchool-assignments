import { useState } from 'react'
import Gradient from './components/Gradient'
import Codebox from './components/Codebox'
import './App.css'

function App() {

  const [colors, setColors] = useState(["#FFFFFF", "#000000"]);

  const [angle, setAngle] = useState(90);

  function handleChange(e, id) {
    console.log(e.target.value);
    const tempArr = [...colors];
    tempArr[id] = e.target.value;

    setColors(tempArr);
  }

  function changeAngle(e) {
    setAngle(e.target.value)
  }

  return (
    <div className="container">
      <div className="left-side">
        <Gradient colors={colors} angle={angle} />
        <Codebox colors={colors} angle={angle} />
      </div>
      <div className="right-side">
        {colors.map((item, index) => {
          console.log(item)
          return(
            <div key={index} className="input-container">
              <div className="input-row">
                <input
                  placeholder={item}
                  type="color"
                  value={item}
                  id={index}
                  onChange={(e) => handleChange(e, index)}>
                  </input>
                  <span className="hex-code">{item}</span>
              </div>
            </div>
          )
        })}
        <div className="angle-row">
          Angle:
          <input
            className="angle"
            type="text"
            value={angle}
            onChange={changeAngle}></input>
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [colorFirst, setColorFirst] = useState("#FFF");
  const [colorSecond, setColorSecond] = useState("#FFF");
  const [angle, setAngle] = useState(0);

  return (
    <div className="container">
      <div className="leftSide">
        <Gradient />
        <Codebox />
      </div>
      <div className="rightSide">
      </div>
    </div>
  )
}

export default App

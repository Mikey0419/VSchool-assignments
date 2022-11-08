import './App.css'
import Card from './components/Card'
import data from './data'

function App() {

  const cardElement = data.map((item, index) => {
    return(
      <Card key={index} item={item} />
    )
  })

  return (
    <div className="container">
      {cardElement}
    </div>
  )
}

export default App

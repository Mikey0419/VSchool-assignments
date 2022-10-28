import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import './App.css';

const gridData = [
  {
    id: 1,
    imgUrl: "./src/assets/swimmer.png",
    available: "SOLD OUT",
    rating: "5.0",
    reviews: 6,
    title: "Life lessons with Katie Zaferes",
    price: 136,
    country: "USA"
  }
]

/*
<Card
        imgUrl="./src/assets/swimmer.png"
        available="SOLD OUT"
        rating="5.0"
        reviews={6}
        title="Life lessons with Katie Zaferes"
        price={136}
        country="USA"
      />
*/

function App() {

  const cardElement = gridData.map(item => {
    return (
      <Card key={item.id} imgUrl={item.imgUrl} available={item.available} rating={item.rating} reviews={item.reviews} title={item.title} price={item.price} country={item.country} />
    )
  })
  
  return (
    <div>
      <Navbar />
      <Hero />
      {cardElement}
    </div>
  )
}

export default App

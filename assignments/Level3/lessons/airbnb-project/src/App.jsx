import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import data from './data.jsx';
import './App.css';

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
  const cardElement = data.map(item => {

    function available() {
      if (item.openSpots === 0) {
        return "SOLD OUT" 
      } else {
          return `${item.openSpots} SPOTS`
        }
    }

    let spots = available();
    
    return (
      <Card key={item.id} coverImg={item.coverImg} available={spots} rating={item.stats.rating} reviewCount={item.stats.reviewCount} title={item.title} price={item.price} location={item.location} />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-grid">
        {cardElement}
      </div>
    </div>
  )
}

export default App

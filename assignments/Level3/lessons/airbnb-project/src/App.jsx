import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        imgUrl="./src/assets/swimmer.png"
        status="SOLD OUT"
        rating="5.0"
        reviews={6}
        title="Life lessons with Katie Zaferes"
        price={136}
        country="USA"
      />
    </div>
  )
}

export default App

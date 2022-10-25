import Content from './components/Content';
import Footer from './components/Footer';
import image from './assets/card_image.png';
import './App.css';

function App() {
  return (
    <div className="card-container">
      <img className="avatar" src={image} />
      <Content />
      <Footer />
    </div>
  )
}

export default App

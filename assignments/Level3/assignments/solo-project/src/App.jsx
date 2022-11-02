import './App.css'
import BlogCard from './components/BlogCard'
import Navbar from './components/Navbar'
import data from './data'

function App() {

  const blogElement = data.map((item, index) => {
    return(
      <BlogCard key={index} item={item} />
    )
  })

  return (
    <div className="container">
      <Navbar />
      {blogElement}
    </div>
  )
}

export default App

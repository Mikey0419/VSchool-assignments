import './App.css'
import BlogCard from './components/BlogCard'
import data from './data'

function App() {

  const blogElement = data.map((item, index) => {
    return(
      <BlogCard key={index} item={item} />
    )
  })

  return (
    <div className="container">
      {blogElement}
    </div>
  )
}

export default App

import './App.css'
import data from './data'

// map through data
function blogData() {
  data.map((item, index) => {
    return(
      <BlogCard key={index} item={item} />
    )
  })
}

function App() {

  const blogElement = blogData();

  return (
    <div className="container">
      {blogElement}
    </div>
  )
}

export default App

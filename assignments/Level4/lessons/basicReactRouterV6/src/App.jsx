import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import './App.css'

function App() {

  return (
    <>
      <Router>

        <nav style={{padding: "25px"}}>
          <Link to = "/">
            Home
          </Link>
          <Link to = "/about">
            About
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </Router>
    </>
  )
}

export default App

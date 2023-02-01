import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About'
import './App.css'

function App() {

  return (
    <>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

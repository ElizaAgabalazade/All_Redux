import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/Post'
import Navigation from './components/Navigation'
import './App.css'
const App = () => {


  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post' element={<Post />} />
      </Routes>
    </>
  )

}

export default App

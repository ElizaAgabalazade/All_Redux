import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Mal from './pages/Mal'
import './App.css'
import Users from './pages/Users'

const App = () => {


  return (
    <>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<Users />} />
        {/* <Route path='/mal' element={<Mal />} /> */}
      </Routes>
    </>
  )
}

export default App

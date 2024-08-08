import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import "./Responsive.css"
import Home from './Component/Pages/Home'
import Sidebar from './Component/Sidebar'
import ColorChange from './Component/ColorChange'
import About from './Component/Pages/About'
import Services from './Component/Pages/Services'
import Contact from './Component/Pages/Contact'

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <ColorChange />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='services' element={<Services/>} />
          <Route path='portfolio' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes> 
      </Router>
    </>
  )
}

export default App

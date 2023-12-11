import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import {Routes,Route} from 'react-router-dom'
import Skills from './pages/Skills'
import Service from './pages/Service'
const App = () => {

 
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/contact' element={<Contact/>} /> 
          <Route path='/skills' element={<Skills/>} /> 
          <Route path='/service' element={<Service/>} /> 
        {/* <Home/> */}
        {/* <Contact/> */}
        </Routes>
        <Footer/>
    </>
  )
}

export default App
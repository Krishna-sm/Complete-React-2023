import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import CartPage from './pages/Cart'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import SingleItem from './pages/SingleItem'
const App = () => {
  return (
    <>
          <BrowserRouter>
          <Navbar/>
            <div className="min-h-screen">
            <Routes>
              <Route path="/"  Component={Home} />
              <Route path="/product/:slug"  Component={SingleItem} />
              <Route path="/cart"  Component={CartPage} />
              <Route path="/about"  Component={About} />
              <Route path="/contact"  Component={Contact} />
            </Routes>
            </div>
              <Footer/>
          </BrowserRouter>
    </>
  )
}

export default App
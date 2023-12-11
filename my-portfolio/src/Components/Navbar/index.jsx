import React, { useEffect, useState } from 'react'
import './style.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

import {useLocation} from 'react-router-dom'

const Navbar = () => {
  const [progress,setProgress] = useState(0);
const location = useLocation()
useEffect(()=>{
   
    setProgress(100)

   

 
},[location])


useEffect(()=>{
      document.title = location.pathname==='/'?  `Krishna | Home`:`Krishna | ${location.pathname.replace("/","").charAt(0).toUpperCase()+location.pathname.replace("/","").substring(1)}`
},[location])




  return (

    <>
    <ToastContainer/>
        <header id='navbar'>
          <nav>
            <Link to="/">Krishna</Link>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
              <Link to="/skills">Skills</Link>

              </li>
              <li>
              <Link to="/service">Service</Link>

              </li>
            </ul>
          </nav>
        </header>

        <LoadingBar
        color='#151515'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
  
    </>
  )
}

export default Navbar
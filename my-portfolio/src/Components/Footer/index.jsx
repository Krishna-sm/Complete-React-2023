import './style.scss'
import React from 'react'

const Footer = () => {
  return (
    <>
               <footer id="footer">
                      <div className="">
                        <p>copyright { new Date().getFullYear()}</p>
                      </div>
               </footer>
    </>
  )
}

export default Footer
import './style.scss'
import { TypeAnimation } from 'react-type-animation';
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Hero = () => {

  const naviagte = useNavigate()

  return (
    <>
            <div id='Hero' className="">
                <div className="about">


              <div className="headings">
           <h1>I am  a  <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Frontend Developer',
        1000,
        'Web Designer ',
        1000,
        'UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      // style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veniam sequi assumenda cupiditate necessitatibus deleniti libero et esse, aperiam cumque pariatur laboriosam quibusdam ducimus odit. Libero, dolor aperiam iste enim perspiciatis at mollitia, non ullam unde porro</p>
<div className="btns">
  
    <button onClick={()=>naviagte('/contact')} >Hire Me</button>
          <button onClick={()=>naviagte('/service')} >Explore</button>
</div>

              </div>

                </div>
                <div className="me">
                  <div className="">
                    <img src="https://plus.unsplash.com/premium_photo-1682140999442-e9e2a5f55be6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                </div>
              </div>        
    </>
  )
}

export default Hero
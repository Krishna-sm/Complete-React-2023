import './style.scss'
import React, { useEffect, useState } from 'react'
import SKillsApi from './api.json';


const Accorditon = ({title,technologies})=>{

   const [isShow,setIsShow] = useState(false);

  return  <div  className="accordion">
  <div>
    <label onClick={()=>setIsShow(!isShow)} htmlFor="section1" className="accordion__label">{title}</label>
    {isShow && <div className="accordion__content">
      <ul>
        {
          technologies.map((cur,i)=>{
            return <li key={i}>{cur}</li>
          })
        }
      </ul>
    </div>}
  </div>

</div>
}



const Skills = () => {



  return (
    <>
            <div id="skills">


  
{
  SKillsApi.map((cur,i)=>{
      return <Accorditon  title={cur.title} technologies ={cur.technologies} key={i} />
  })
}
           


            </div>
    </>
  )
}

export default Skills
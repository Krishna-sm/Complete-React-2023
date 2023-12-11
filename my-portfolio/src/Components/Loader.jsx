import React from 'react'
import { ThreeDots } from  'react-loader-spinner'
import './styles.scss'
const Loader = () => {
  return (
    <>
       <div id="loader">
       <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#000" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
       </div>
    </>
  )
}

export default Loader
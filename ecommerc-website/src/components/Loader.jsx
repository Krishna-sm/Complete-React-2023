import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
  return (
    <>
                <div className="min-h-[82vh] w-full flex justify-center items-center">
                <Triangle
  height="80"
  width="80"
  color="#000"
  
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>
                </div>
    </>
  )
}

export default Loader
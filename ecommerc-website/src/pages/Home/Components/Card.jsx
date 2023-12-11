import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id,image,category,title,price}) => {
  return (
    <>
            <Link to={`product/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-md duration-300 transition-all">
        <div className="block relative h-48 rounded overflow-hidden">
          <img alt={`ecommerce ${id}`} className="object-cover object-center w-full h-full block" src={image}/>
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
          <p className="mt-1">${price}</p>
    
        </div>
      </Link>
     
    </>
  )
}

export default Card
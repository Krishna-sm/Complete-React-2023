
import React, { useEffect, useState } from 'react'
import { LuShoppingCart } from "react-icons/lu";
import Card from './components/Card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen,setIsOpen ] = useState(false);

    const data  = useSelector((state)=>state.product.cart)
      // console.log({data});

      
// let price= 0;
let [price,setPrice] = useState(0);
useEffect(()=>{

      if(data && data.length>0){
        let totalPrice = 0
        data.forEach((cur,i)=>{
          totalPrice+=  cur.price*cur.qty
          setPrice(totalPrice)
      })
      }else{

        setPrice(0)
      }

},[data])




// console.log(price);



  return (
    <>
         <div className={`sidebar h-screen w-full md:w-[75%] lg:w-[45%] bg-indigo-500 fixed   z-[9] right-0 top-0
                transition-all duration-300 ${isOpen?'translate-x-[-0%]':'translate-x-[100%]'} overflow-y-auto  items-center flex   flex-col gap-y-6 py-10
             `}>
                            {
                                data && data.length>0 && data.map((c,i)=>{
                                    return <Card data={c} key={i}/>
                                })
                            }

                            <div className="w-[70%] flex flex-col gap-y-3">
                                <h1 className="text-4xl text-center text-white">Total: ${Math.floor(price)}/- </h1>
                               {price>0&& <Link  to={'/cart'} className='bg-indigo-900 text-white px-12 py-3 rounded-sm text-center capitalize'>checkout</Link>}
                            </div>

             </div>


            <button onClick={()=>setIsOpen(!isOpen)} className='bg-indigo-800 z-[10] px-6 text-3xl text-white rounded-full shadow py-6 fixed bottom-4 right-3'><LuShoppingCart/></button>
    </>
  )
}

export default Sidebar
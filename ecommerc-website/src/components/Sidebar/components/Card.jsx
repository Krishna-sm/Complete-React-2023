import React from 'react'
import { FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteItem, incrementIntoCart, minusIntoCart } from '../../../redux/slices/Product';
import toast from 'react-hot-toast';
const Card = ({data}) => {
  const dispatch = useDispatch();

  const MinusIntoCart = (id)=>{
    //code
    dispatch(minusIntoCart(id));
  }
  const IncrementIntoCart = (id)=>{
    //code
    dispatch(incrementIntoCart(id));
  }

  const DeleteItems =(id)=>{
    //code
    dispatch(deleteItem(id));
    toast.success("item deleted");
  }


  return (
    <>
            <div className="w-[70%] bg-white py-4 flex justify-between items-center px-4">
                <img src={data.image} className='w-20 h-20 rounded-full' alt="" />
                <div className="">
                    <h1>{data.title.length>20?data?.title?.substring(0,20)+"...":data?.title} </h1>
                    <div className="flex justify-between items-center gap-5">
                        <button onClick={()=>IncrementIntoCart(data.id)}  className='w-10 h-10 rounded-full text-4xl bg-green-500'>+</button>
                        <h1 className='text-3xl'>{data.qty}</h1>
                        <button onClick={()=>MinusIntoCart(data.id)} className='w-10 h-10 rounded-full text-4xl bg-red-500'>-</button>
                    </div>
                </div>
                <div className="">
    <FaTrash onClick={()=>DeleteItems(data.id)} className='text-4xl text-green-700' />
                </div>
            </div>
    </>
  )
}

export default Card
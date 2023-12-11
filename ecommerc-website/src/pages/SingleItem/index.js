import React from 'react'
import { useParams } from 'react-router-dom'
import { useSingleProductFetchQuery } from '../../redux/query/ProductQuery';
import Loader from '../../components/Loader';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/Product';
import toast from 'react-hot-toast';

const SingleItem = () => {


  const dispatch = useDispatch();

  const AddToCart = ({id,title,image,price})=>{
      // code

      dispatch(addToCart({id,title,image,price}))

      toast.success("Item Added in Cart successfully");
  }


const paramsData = useParams();
const {isLoading,isError,data} = useSingleProductFetchQuery(paramsData?.slug)
if(isLoading){
  return <Loader/>
}

if(isError){
  return <>something went wrong....</>
}

      // console.log({data});
  return (
    <>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-44 object-cover object-center rounded" src={data?.image} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{data?.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data?.title}</h1>
    
        <p className="leading-relaxed">{data?.description}</p>
    
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${data?.price}</span>
       {data &&   <button onClick={()=>{AddToCart({id:data?.id,title:data?.title,image:data.image,price:data?.price})}} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button>
     }
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default SingleItem
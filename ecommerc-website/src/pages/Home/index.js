import React from 'react'
import Card from './Components/Card'
import Loader from '../../components/Loader'
import { useGetAllProductsQuery } from '../../redux/query/ProductQuery'

const Home = () => {

  const {isLoading,isError,data} = useGetAllProductsQuery();

  if(isLoading){
    return <Loader/>
  }

  if(isError){
    return <>something went wrong....</>
  }
  return (
    <>
       <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
          {
          data&& data.length>0&&  data.map((c,i)=>{
              return <Card id={c.id} key={i} image={c.image} category={c.category} title={c.title} price={c.price} />
            })
          }
    </div>
  </div>
</section>


    </>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import './style.scss'
import axios from 'axios'
import {toast} from 'react-toastify'
import Loader from '../../Components/Loader'


const Service = () => {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);


const fetchData = async()=>{


  try {
        const response = await axios.get(`https://api.github.com/users`);

        const data = await response.data;

        setUsers(data)
        // console.log({data});
        setLoading(false)

  } catch (error) {
        toast.error(error.response.data.message)
  }
}

useEffect(()=>{
  fetchData()
},[])

if(loading){
  return <Loader/>
}

  return (
    <>
            <div id="service">
          {
            users && users.length>0 &&users.map((cur,i)=>{
              return <div key={i} class="card">
              <img src={cur.avatar_url} alt={cur.login} style={{width:"100%"}}/>
              <div class="container">
                <h4><b>{cur?.login}</b></h4>
                <p>{cur?.html_url}</p>
              </div>
            </div>
              
  
            })
          }

            </div>
    </>
  )
}

export default Service
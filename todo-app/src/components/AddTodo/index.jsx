import React, { useState } from 'react'
import './style.css'
const AddTodo = ({InsertTodos}) => {

    // let a=10;
    // const [a,b] = useState('krishna')

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
        // console.log(arr);



    const SubmitTodo =(e)=>{
        e.preventDefault()

        const item ={
            title:title,
            description:description
        }
        InsertTodos(item)

        alert("form submit")
    }

  return (
    <>
        <form onSubmit={SubmitTodo}  id='AddTodo' className="">
            <div className="mb-3">
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Enter Title' />
            </div>
            <div className="mb-3">
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Enter Description' />
            </div>
            <div className="mb-3">
                <button>Add Todo</button>
            </div>


        </form>
    </>
  )
}

export default AddTodo

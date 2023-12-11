import React from 'react'
import './style.css'
const AllTodos = (krishna) => {

    const DeleteTodoHandler=(id)=>{
        krishna.deleteTodo(id)
        alert(`todo ${id} is deleted`)
    }

  return (
    <>
                <section id='AllTodos' className="">
                <table border={'1'} className='table' width={'60%'}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Complete</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        krishna.Todos.map((c,i)=>{
                            return  <tr key={i} >
                            <td>{i+1}</td>
                            <td style={{textDecoration:c.isComplete?'line-through':''}} >{c.title}</td>
                            <td style={{textDecoration:c.isComplete?'line-through':''}} >{c.description}</td>
                            <td>{c.isComplete?'completed':'un-completed'}</td>
                            <td>
                                <button  onClick={()=>DeleteTodoHandler(c.id)} >
                                delete</button>
                                </td>
                                <td>
                               {!c.isComplete && <button 
                                onClick={()=>krishna.updateTodo(c.id)}
                                 className='button2'>
                                Update</button>}
                                </td>
                        </tr>
                        })
                       }
                    </tbody>
                    </table>
                    </section>   
    </>
  )
}

export default AllTodos

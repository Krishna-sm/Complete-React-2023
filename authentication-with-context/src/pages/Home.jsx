import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../context/Authentication"
import {toast} from 'react-hot-toast'

const Home = () => {
  const navigate = useNavigate()



  const {user,loading,LogoutHandler} = useAuth()
  const logoutHnadler = async()=>{
    try {
     LogoutHandler()
     toast.success("logout success")
     navigate("/login")
    } catch (error) {
       toast.error(error.message)
    }
   }

  if(loading){
    return <div>loading...</div>
  }

  if(!user && !loading) {
    return <Navigate to={'/login'} />
  }


  return (
    <>
            <div className="col-sm-6 card p-5">
              <div className="card-heading">
                <h3>User Profile</h3>
              </div>
              <div className="card-body">
                <h3>Name : {user && user.displayName}</h3>
                <h3>Email : {user && user.email}</h3>
              </div>
              <div className="card-footer">
                <button onClick={logoutHnadler} className="btn btn-danger">Logout</button>
              </div>
            </div>
    </>
  )
}

export default Home
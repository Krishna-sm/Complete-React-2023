import {Link, useNavigate} from 'react-router-dom'
import { FaUnlock,FaLock  } from "react-icons/fa6";
import {Toaster,toast} from 'react-hot-toast'
import { useAuth } from '../context/Authentication';
const Navbar = () => {

  const navigate = useNavigate()
  const {user,LogoutHandler}  = useAuth()

  // console.log({user});
  const logoutHnadler = async()=>{
   try {
    LogoutHandler()
    toast.success("logout success")
    navigate("/login")
   } catch (error) {
      toast.error(error.message)
   }
  }

  return (
    <>
    <Toaster/>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand d-flex align-items-center gap-2" to="/"> {user?<FaUnlock/>:<FaLock/>} Authentication</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
       {!user?
       <>
       
       <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
        </li>
       </>:
       <>
              <li className="nav-item">
          <div className="btn btn-secondary"  onClick={logoutHnadler}>Logout</div>
        </li> 
       </>
     }
       
      </ul>
   
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
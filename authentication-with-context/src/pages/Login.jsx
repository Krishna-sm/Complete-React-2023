import {Link,Navigate,useNavigate} from 'react-router-dom'
import {Form,Field,ErrorMessage,Formik} from 'formik'
import * as yup from 'yup'
import {toast} from 'react-hot-toast'
import { useAuth } from '../context/Authentication'
const Login = () => {
  const {user,loading,loginUser,LoginWIthGoogleHandler} = useAuth()


  if(loading){
    return <div>loading...</div>
  }

  if(user && !loading) {
    return <Navigate to={'/'} />
  }

    const navigate = useNavigate()

const validationSchama = yup.object({
    email:yup.string().email("Enter Must a Valid Email").required("Email is Required!"),
    password:yup.string().min(6,"Password should be greater than 6").required("password is Required!"),
})


const OnSubmitHandler = async(e,{resetForm})=>{
    try {
      await loginUser(e);
                toast.success("User Login Successful");
                resetForm()
                navigate("/")
    } catch (error) {
                toast.error(error.message)
    }
}
const loginWithGOogle = async()=>{
  try {
    await LoginWIthGoogleHandler()
              toast.success("User Login Successful");
            
              navigate("/")
  } catch (error) {
              toast.error(error.message)
  }
}
  return (
    <>
              
              <Formik validationSchema={validationSchama} initialValues={{email:'',password:''}} onSubmit={OnSubmitHandler} >
              <Form className="container col-sm-12 col-md-6 mx-auto">
    
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <Field type="email" className="form-control" name="email" id="email" placeholder="name@example.com" />
    <ErrorMessage component={'p'} className='text-danger' name='email' />

  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <Field type="password" className="form-control" name="password" id="password" placeholder="enter your password" />
    <ErrorMessage component={'p'} className='text-danger' name='password' />

  </div>
  <div className="mb-3">
  <button type='submit' className="btn btn-primary">Login</button>
  </div>

  <div className="mb-3">
  <button type='button' onClick={loginWithGOogle} className="btn btn-danger w-100">Login With Google</button>
  </div>
  <div className="mb-3">
    <p className="text-center h6">Don{"'"}t Have An Account? <Link to="/register">Register</Link> </p>
  </div>
</Form>

              </Formik>
    </>
  )
}

export default Login
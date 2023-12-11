import {Link,Navigate,useNavigate} from 'react-router-dom'
import {Form,Field,ErrorMessage,Formik} from 'formik'
import * as yup from 'yup'
import {toast} from 'react-hot-toast'
import { useAuth } from '../context/Authentication'
const Register = () => {
  const {user,loading,registerUser} = useAuth()


  if(loading){
    return <div>loading...</div>
  }

  if(user && !loading) {
    return <Navigate to={'/'} />
  }


    const navigate = useNavigate()

const validationSchama = yup.object({
    name:yup.string().required("Name is Required!"),
    email:yup.string().email("Enter Must a Valid Email").required("Email is Required!"),
    password:yup.string().min(6,"Password should be greater than 6").required("password is Required!"),
})


const OnSubmitHandler = async(e,{resetForm})=>{
    try {

      await registerUser(e)
                toast.success("User Register Successful");
                resetForm()

                navigate("/")
    } catch (error) {
                toast.error(error.message)
    }
}
  return (
    <>
              
              <Formik validationSchema={validationSchama} initialValues={{name:'',email:'',password:''}} onSubmit={OnSubmitHandler} >
              <Form className="container col-sm-12 col-md-6 mx-auto">
               <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <Field type="text" className="form-control" name="name" id="name" placeholder="John Doe" />
    <ErrorMessage component={'p'} className='text-danger' name='name' />
  </div>
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
  <button type='submit' className="btn btn-primary">Register</button>
  </div>
  <div className="mb-3">
    <p className="text-center h6">Already Have An Account? <Link to="/login">Login</Link> </p>
  </div>
</Form>

              </Formik>
    </>
  )
}

export default Register
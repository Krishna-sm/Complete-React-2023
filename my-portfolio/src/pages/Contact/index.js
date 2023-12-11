import React, { useEffect } from 'react'
import './style.scss'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import axios from 'axios'
const Contact = () => {

    const validatitionSchema = yup.object({
        name:yup.string().required("Name is Required"),
        email:yup.string().email("Plese enter Valid Email").required("Email is Required"),
        message:yup.string().min(5,"Message should be greater than 5 ").required("Message is Required"),
    })

    const onSubmitHandler = async(e,helper)=>{
                    // console.log({e});
try {
    const response = await axios.post(`https://65530fdf5449cfda0f2e0d80.mockapi.io/contact`,e);

   await response.data;
   
   helper.resetForm();
   toast.success("contact successfully")
} catch (error) {
            toast.error(error.response.data.message)
}


    }
  

  return (
    <section id="contact">
               <Formik initialValues={{name:'',email:'',message:''}} validationSchema={validatitionSchema} onSubmit={onSubmitHandler} >
               <Form action="">
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <Field type="text" name="name" className='input' placeholder='Enter Your Name' id="name" />
                        <ErrorMessage name='name' component={'p'} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" className='input' placeholder='Enter Your Email' id="email" />
                        <ErrorMessage name='email' component={'p'} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="message">Message</label>
                        <Field as="textarea" name="message" rows={4} placeholder='Enter Your Message' id="message" />
                        <ErrorMessage name='message' component={'p'} />

                    </div>
                    <div className="mb-3">
                        <button type='submit'>Submit</button>
                    </div>
                </Form>
               </Formik>
    </section>
  )
}

export default Contact
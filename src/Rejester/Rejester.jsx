import React, { useState } from 'react'
import logoSm from '../assets/images/logo-sm.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Triangle } from 'react-loader-spinner'



export default function Rejester(){
   let navigate = useNavigate()
   const [loading, setLoading] = useState(false)
   const [err, setErr] = useState('')
   

   let validationSchema = Yup.object({
      first_name: Yup.string().required('first name is required').min(3, 'Minmim 3 letters').max(8, 'Maxmin 8 letters'),
      last_name: Yup.string().required('last name is required').min(3, 'Minmim 3 letters').max(8, 'Maxmin 8 letters'),
      email: Yup.string().required('email is required').email('email is invalid'),
      password: Yup.string().required('password is requrid ').matches(/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'A password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters, for example #, ?, !'),
      age: Yup.string().required('age is required')

   })


   async function rejesterSubmit(values) {

      setLoading(true)
      localStorage.setItem('userFname',values.first_name);
      localStorage.setItem('userLname',values.last_name);
      let { data } = await axios.post(`https://movies-api.routemisr.com/signup`, values).catch((err)=>{
      })
         console.log(data);
      if (data.message == 'success') {
          toast.success('successfully registered' , {
            icon:'👾'
          })
          navigate('/login')
          setLoading(false)
      }
      else{
         toast.error("Email already registered")
         setLoading(false)


      }


  }







   let formik = useFormik({
      initialValues:{
         "first_name":'',
	      "last_name":'',
        "email": '',
        "password":'',
	      "age":''
      }, validationSchema,
      onSubmit: rejesterSubmit

   })


   

   return <>

   {loading ? <div className='loading'>      
   <Triangle
  visible={true}
  height="200"
  width="200"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />

    </div> : <main className="container register min-vh-100 hstack">
          <section className="register-area shadow w-100 rounded overflow-hidden">
             <div className="row g-0">
                <div className="col-lg-5 d-none d-md-block">
                   <div className="image"></div>
                </div>
                <div className="col-lg-7">
                   <div className="p-4">
                      <header className="text-center">
                         <img src={logoSm} alt="logo game over" />
                         <h1>Register to Game Over</h1>
                      </header>
 
                      <form className="row g-3 my-4" onSubmit={formik.handleSubmit}>
                      {err? <div class="error bg-black w-100 my-2">
                    <div class="error__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
                    </div>
                    <div class="error__title">{err}</div>
                </div>:''}
                         <div className="col-md-6">
                            <div className="form-data">
                               <input type="text" id="first_name" className="form-control" placeholder="First Name" name='first_name'  onChange={formik.handleChange} onBlur={formik.handleBlur} />
                               {formik.errors.first_name && formik.touched.first_name ?<div class="error w-100 mt-1">
                    <div class="error__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
                    </div>
                    <div class="error__title">{formik.errors.first_name}</div>
                </div>: ''}
                            </div>
                         </div>
                         <div className="col-md-6">
                            <div className="form-data">
                               <input type="text" id="last_name" className="form-control" placeholder="Last Name" name='last_name'  onChange={formik.handleChange} onBlur={formik.handleBlur} />
                               {formik.errors.last_name && formik.touched.last_name ?<div class="error w-100 mt-1">
                    <div class="error__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
                    </div>
                    <div class="error__title">{formik.errors.last_name}</div>
                </div>: ''}
                            </div>
                         </div>
 
                         <div className="col-12">
                            <div className="form-data">
                               <input type="email" id="email" className="form-control mb-3" placeholder="Email Address"  onChange={formik.handleChange} onBlur={formik.handleBlur} />
                               {formik.errors.email && formik.touched.email ?<div class="error w-100 mt-1">
                    <div class="error__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
                    </div>
                    <div class="error__title">{formik.errors.email}</div>
                </div>: ''}
                            </div>
                         </div>
                         <div className="col-12">
                            <div className="form-data">
                               <input type="password" id="password" className="form-control" placeholder="Password" name='password'  onChange={formik.handleChange} onBlur={formik.handleBlur} />
                               {formik.errors.password && formik.touched.password ?<div class="error w-100 h-25 mt-1">
                    <div class="error__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
                    </div>
                    <div class="error__title">{formik.errors.password}</div>
                </div>: ''}
                            </div>
                         </div>
                         <div className="col-12">
                            <div className="form-data">
                               <input type="number" id="age" className="form-control" placeholder="Enter Age" name='age' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                               {formik.errors.age && formik.touched.age ?<div class="error w-100 mt-1">
                                   <div class="error__icon">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
                                  </div>
                                  <div class="error__title">{formik.errors.age}</div>
                               </div>: ''}
                            </div>
                         </div>
                         <div className="col-12">  
                            <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn w-100 main-btn">Register</button>
                            <p id="msg" className="text-center"></p>
                         </div>
                      </form>
 
                      <footer>
                         <p className="text-center small">
                            Already a member?
                            <Link to={'/login'} className="link-secondary text-decoration-none text-white" role="button"> LogIn </Link>
                         </p>
                      </footer>
                   </div>
                </div>
             </div>
          </section>
       </main>
    }
  
   </>





}



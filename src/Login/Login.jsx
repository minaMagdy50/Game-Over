import React, { useState } from 'react'
import logoSm from '../assets/images/logo-sm.png'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useFormik } from 'formik'


import * as Yup from 'yup'
import { Triangle } from 'react-loader-spinner'


export default function Login() {
   let navigate = useNavigate()
   const [loading, setLoading] = useState(false)
   const [err, setErr] = useState('')
   



   let validationSchema = Yup.object({
      email: Yup.string().required('email is required').email('email is invalid'),
      password: Yup.string().required('password is requrid ').matches(/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'A password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters, for example #, ?, !')
   })



   
   async function loginsubmit(values) {

      setLoading(true)
      console.log(values);
      let { data } = await axios.post(`https://movies-api.routemisr.com/signin`, values).catch((err)=>{
      setErr(err.response.data.message);
      setLoading(false)
      })
         console.log(data);
      if (data.message == 'success') {
          toast.success('welcome' , {
            icon : '🎮'
          } 
          )
          localStorage.setItem('userToken' , data.token)

          navigate('/')
          setLoading(false)
      }


  }

  let formik = useFormik({
   initialValues:{
     "email": '',
     "password":'',
   }, validationSchema,
   onSubmit: loginsubmit

})









  return <>
  {loading ?  <div className='loading'>      
   <Triangle
  visible={true}
  height="200"
  width="200"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />

    </div> :  <main className=" login min-vh-100 hstack">
         <section className=" container login-area shadow w-100 rounded overflow-hidden">
            <div className="row g-0">
               <div className="col-lg-5 d-none d-md-block">
                  <div className="image"></div>
               </div>
               <div className="col-lg-7">
                  <div className="p-4">
                     <header className="text-center">
                        <img src={logoSm} alt="logo game over" />
                        <h1 className='tex-'>LogIn to Game Over</h1>
                     </header>

                     <form className="row g-3 my-4" onSubmit={formik.handleSubmit}>
                     {err? <div class="error w-100 my-2">
                    <div class="error__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
                    </div>
                    <div class="error__title">{err}</div>
                </div>:''}
                        <div className="col-12">
                           <div className="form-data">
                              <input type="email" id="email" className="form-control" placeholder="Email Address" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
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
                              <input type="password" id="password" className="form-control" placeholder="Password" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                              {formik.errors.password && formik.touched.password ?<div class="error w-100 mt-1">
                    <div class="error__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
                    </div>
                    <div class="error__title">{formik.errors.password}</div>
                </div>: ''}
                           </div>
                        </div>

                        <div className="col-12">
                           <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn w-100 main-btn" id="btnLogin">LogIn</button>
                           <p id="msg" className="text-center"></p>
                        </div>
                     </form>

                     <footer>
                        <p className="text-center small">
                           Not a member yet?
           <Link to={'/register'} className="link-secondary text-decoration-none text-light " role="button"> Create Account </Link>
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


import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { UserToken } from '../../Context/UserToken'

export default function Login() {
  let navigate = useNavigate()
  let {setIsLogin} = useContext(UserToken) 
  let [error, setError] = useState('')
  let [loading, setLoading] = useState(false)
  let BaseUrl = 'https://ecommerce.routemisr.com'

  async function submitLogin(values) {
    setLoading(true)
    let { data } = await axios.post(`${BaseUrl}/api/v1/auth/signin`, values)
      .catch((err) => {
        setLoading(false)
        setError(err.response.data.message)
      })

    if (data.message === 'success') {
      setError('')
      setLoading(false)
      localStorage.setItem('userToken',data.token)
      setIsLogin(data.token)
      navigate('/')
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().required('email is required').email('email not valid'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'password not match').required('password is required'),
  })

  let formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: submitLogin
  })

  return (
    <>
      <div className="container pt-5">
        <h2 className='fw-bold mt-5 mb-3'>login now</h2>
        <form onSubmit={formik.handleSubmit}>

        {error ? <p className='alert alert-danger my-3'>{error}</p> : ''}

          <label htmlFor="email">Email :</label>
          <input type="email" className='form-control mb-3' id='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.email && formik.touched.email ? <p className='alert alert-danger'>{formik.errors.email}</p> : ''}

          <label htmlFor="password">Password :</label>
          <input type="password" className='form-control mb-3' id='password' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.password && formik.touched.password ? <p className='alert alert-danger'>{formik.errors.password}</p> : ''}
          <Link className='fw-bold hov' to='/forgotPassword'>forget your password ?</Link>
          {loading ?
            <button className='btn form-btn ms-auto d-block' >
              <RotatingLines 
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="60"
                visible={true}
              />
              
            </button> : <button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn form-btn ms-auto d-block' >login now</button>}
        </form>
      </div>
    </>
  )
}

import axios from "axios";
import {  useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'

export default function ForgotPassword(){
let validationShema=Yup.object({
    email:Yup.string().required('email is requried').email('enter avalid email')
})

    async function sendCode(values){
let {data}=await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',values)
    console.log(data)
    if(data.statusMsg =='success'){
        document.querySelector('.forgotpassword').classList.add('d-none')
        document.querySelector('.verifyCode').classList.remove('d-none')
    }
}
    let formik=useFormik({
        initialValues:{email:''},
        validationSchema:validationShema,
        onSubmit:sendCode
    })


let validationShema2=Yup.object({
    resetCode:Yup.string().required('email is requried')
})

let navigate=useNavigate()
    async function sendData(values){
let {data}=await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',values)
    console.log(data)
if(data.status=='Success'){
navigate('/resetPassword')
}

}
    let verifyFormik=useFormik({
        initialValues:{resetCode:''},
        validationSchema:validationShema2,
        onSubmit:sendData
    })
    return(

        <>
        <div className="forgotpassword">
            <div className=" container pt-5 mt-5">
                <h3 className="fw-bold">please enter your verification code</h3>
                <form action="" onSubmit={formik.handleSubmit} className=" my-3">
                    <input onBlur={formik.handleBlur} type="email" value={formik.values.email} onChange={formik.handleChange} id='email' placeholder="Email" name="email" className="form-control" />
                    {formik.touched.email&&formik.errors.email?<p className="text-danger my-3">{formik.errors.email}</p>:''}
                    <button disabled={!(formik.isValid&&formik.dirty)} type="submit" className="btn btn-outline-success text-success my-3">Verify</button>
                </form>
            </div>
        </div>

        <div className="verifyCode d-none">
            <div className=" container pt-5 mt-5">
                <h3 className="fw-bold">reset your account password</h3>
                <form action="" onSubmit={verifyFormik.handleSubmit} className=" my-3">
                    <input onBlur={verifyFormik.handleBlur} type="text" value={verifyFormik.values.resetCode} onChange={verifyFormik.handleChange} id='resetCode' placeholder="code" name="resetCode" className="form-control" />
                    {verifyFormik.touched.resetCode&&verifyFormik.errors.resetCode?<p className="text-danger my-3">{verifyFormik.errors.resetCode}</p>:''}
                    <button disabled={!(verifyFormik.isValid&&verifyFormik.dirty)} type="submit" className="btn btn-outline-success text-success my-3">Verify</button>
                </form>
            </div>
        </div>
        </>
    )
}

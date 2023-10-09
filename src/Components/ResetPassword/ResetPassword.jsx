import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword(){
    let navigate=useNavigate()
    async function RestPassword(values){
        let {data}=await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',values)
        console.log(data)
        if(data.token){
            navigate('/login')
        }
    }

    let formik=useFormik({
        initialValues:{email:'',newPassword:''},onSubmit:RestPassword
    })
    return(
        <>
        <div className="container mt-5 pt-5">
        <h3 className="fw-bold">reset your account password</h3>
            <form action="" onSubmit={formik.handleSubmit}>
                <label>email :</label>
                <input type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control mb-4" id='email' value={formik.values.email}  />
                <label htmlFor="">newPassword :</label>
                <input type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control " id='newPassword' value={formik.values.newPassword}  />
                <button className="btn btn-outline-success my-3">Reset Password</button>
            </form>
        </div>
        </>
    )
}
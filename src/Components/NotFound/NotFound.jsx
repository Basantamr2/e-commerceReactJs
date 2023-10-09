import React from 'react'
import img from '../../assets/images/error.svg'

export default function NotFound() {
  return (
    <div className='my-5 text-center'>
      <h1 className='pt-5 fw-bold'>Not Found</h1>
      <img src={img} alt="error" />
    </div>
  )
}

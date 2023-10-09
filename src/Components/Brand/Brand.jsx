import React from 'react'
import useApi from '../../hooks/useApi'
import Loading from '../Loading'
import { Helmet } from 'react-helmet'

export default function Brand() {
  let { data, isLoading } = useApi('brands', 'brands')
  if (isLoading)
    return <Loading></Loading>
  return (
    <>
          <Helmet>
        <meta charSet="utf-8" />
        <title>Brands page</title>
      </Helmet>
    <div className='container mt-5'>
      <h2 className='text-center m-5 fw-bolder text-success pt-5'>All Brands</h2>
      <div className="row g-4">
        {data?.data.data.map((brand) => <div key={brand._id} className='text-center col-md-3 product'>
          
          
          <img src={brand.image} className='w-100' alt="brand" />
          <p className='fw-bolder'>{brand.name}</p>
        </div>)}
      </div>
    </div>

    </>
  )
}

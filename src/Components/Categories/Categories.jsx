import React from 'react'
import useApi from '../../hooks/useApi'
import Loading from '../Loading'
import { Helmet } from 'react-helmet'

export default function Categories(){
  let { data, isLoading } = useApi('categories', 'categories')
  if (isLoading)
    return <Loading></Loading>
  return (
    <>
          <Helmet>
        <meta charSet="utf-8" />
        <title>Categories page</title>
      </Helmet>

    <div className='container my-5 pt-5 '>
      <div className="row g-4">
        {data?.data.data.map((category) => <div key={category._id} className='text-center col-md-4 border rounded px-0'>

<div className="inner">

          <img src={category.image} className='w-100' height={300}  alt="category" />
          <p className='text-success h3 py-3 fw-bolder'>{category.name}</p>

</div>

        </div>)}

      </div>
    </div>
    </>
  )
}

    
    

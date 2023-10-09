// import React from 'react'
// import { Helmet } from 'react-helmet'
// import Loading from '../Loading'
// import useApi from '../../hooks/useApi'
// import { Link } from 'react-router-dom'

// export default function Products() {
//   let { data, isLoading } = useApi('products', 'products')
//   if (isLoading)
//     return <Loading></Loading>
//   return (
//     <div className='container'>
//         <div className="row">
// {data?.data.data.sort((a,b)=>b.ratingsAverage - a.ratingsAverage).slice(0,10).map((product) => <div className='col-lg-2 col-md-3 col-sm-6' key={product._id}>
//     <div className="product p-3 cursor-pointer">
//         <Link to={`productdetails/${product._id}`}>
//             <img src={product.imageCover} className='w-100' alt="img" />
//             <p className='text-main'>{product.category.name}</p>
//             <p>{product.title.split(" ").slice(0, 2).join(" ")}</p>
//             <div className="product-box d-flex justify-content-between">
//                 <span>{product.price} EGP</span>
//                 <span> <i className='fa-solid fa-star rating-color'></i> {product.ratingsAverage}</span>
//             </div>
//         </Link>
//     </div>
// </div>)
// }
// </div>
    
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Products page</title>
//       </Helmet>
//     </div>
//   )
// }




import React from "react";
import FeaturedProducts from "../FeaturedProducts";
export default function Products(){
  return(
    <FeaturedProducts></FeaturedProducts>
  )
}




// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import toast from 'react-hot-toast'
// import { UserToken } from '../../Context/UserToken'
// import { CartContext } from '../../Context/CartContext'
// import useApi from '../../hooks/useApi'
// import Loading from '../Loading'
// import { Helmet } from 'react-helmet'


// export default function FeaturedProducts() {
//     let { addCart ,setCartNums, setCartId} = useContext(CartContext)
//     let { isLogin } = useContext(UserToken)
//     async function addCartFun(id) {
//         let res = await addCart(id)

//         if (!isLogin) {
//             toast.error(res.response.data.message);
//             return
//         }
//         toast.success(res.data.message, {
//             duration: 2000,
//             position: 'top-center',
//         })
//         setCartNums(res?.data.numOfCartItems);
//         setCartId(res?.data.data._id);
//     }

//     let {isLoading,data} = useApi('products','products')

//     if (isLoading)
//         return <Loading/>

//     return (
//       <>
//         <div className='container pt-5 mt-5'>
//             <div className="row">
//                 {data?.data.data.map((product) => <div className='col-lg-3 col-md-3 col-sm-6' key={product._id}>
//                     <div className="product p-3 cursor-pointer">
//                         <Link to={`productdetails/${product._id}`}>
//                             <img src={product.imageCover} className='w-100' alt="img" />
//                             <p className='text-main'>{product.category.name}</p>
//                             <p className='fw-bold'>{product.title.split(" ").slice(0, 2).join(" ")}</p>
//                             <div className="product-box d-flex justify-content-between">
//                                 <span>{product.price} EGP</span>
//                                 <span> <i className='fa-solid fa-star rating-color'></i> {product.ratingsAverage}</span>
//                             </div>
//                         </Link>
//                         <button onClick={() => { addCartFun(product._id) }} className='btn bg-main text-white my-2'>Add to Cart</button>
//                     </div>
//                 </div>)
//                 }
//             </div>
//         </div>

//         <Helmet>
//           <meta charSet="utf-8" />
//           <title>Products page</title>
//         </Helmet>
//       </>
//     )
// }

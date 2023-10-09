import React, { Suspense, lazy, useContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Brand from './Components/Brand/Brand';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import Categories from './Components/Categories/Categories';
import { UserToken } from './Context/UserToken';
import ProtectedRoute from './Components/PrtotectedRoute';
import ProductDetails from './Components/ProductDetails';
import { Toaster } from 'react-hot-toast';
import Loading from './Components/Loading';
import Orders from './Components/Orders';
import { CartContext } from './Context/CartContext';
import Wishlist from './Components/Wishlist/Wishlist';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';

const Cart = lazy(() => import('./Components/Cart/Cart'));


export default function App() {
  let { setIsLogin } = useContext(UserToken)

  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      setIsLogin(localStorage.getItem('userToken'))
    }
  }, [])

  const routes = createHashRouter([
    {
      path: '', element: <Layout></Layout>, children: [
        { index: true, element: <ProtectedRoute><Home></Home></ProtectedRoute>  },
        { path: 'products', element: <ProtectedRoute><Products></Products></ProtectedRoute>  },
        { path: 'allorders', element: <Orders></Orders> },
        { path: 'brands', element:<ProtectedRoute><Brand></Brand></ProtectedRoute>  },
        {
          path: 'cart', element: <Suspense fallback={<Loading></Loading>}><ProtectedRoute><Cart></Cart></ProtectedRoute></Suspense>
        },
        { path: 'wish', element: <ProtectedRoute><Wishlist></Wishlist></ProtectedRoute>  },
        { path: 'categories', element: <ProtectedRoute><Categories></Categories></ProtectedRoute>  },
        { path: 'productdetails/:id', element:<ProtectedRoute> <ProductDetails></ProductDetails> </ProtectedRoute>},
        { path: 'register', element: <Register></Register> },
        { path: 'login', element: <Login></Login> },
        { path: 'forgotPassword', element: <ForgotPassword></ForgotPassword> },
        { path: 'resetPassword', element: <ResetPassword></ResetPassword> },
        { path: '*', element: <NotFound></NotFound> }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </>
  )
}

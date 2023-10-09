import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserToken } from '../../Context/UserToken';
import { CartContext } from '../../Context/CartContext';
export default function Navbar() {

    let { isLogin, setIsLogin } = useContext(UserToken)
    let { cartNums } = useContext(CartContext)
    let navigate = useNavigate()

    function LogOut() {
        localStorage.removeItem('userToken')
        setIsLogin(null)
        navigate('/')

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed z-3 w-100 top-0">
            <div className="container">
                <Link className="navbar-brand" to=''>
                <div className='d-flex align-items-center justify-content-center'>
                    <i className='fa-solid fa-cart-shopping nav-icon me-1 fa-xl carts'></i>
                    <span className='h4 fw-bold'>fresh cart </span>
                </div>
                </Link>

                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to='' className='nav-link '>Home</Link>
                        </li>


                        <li className='nav-item'>
                            <Link to='cart' className="nav-link ">
                                cart
                            </Link>
                        </li>


                        <li className='nav-item'>
                            <Link to='wish' className="nav-link ">
                                wish list
                            </Link>
                        </li>


                        <li className='nav-item'>
                            <Link to='products' className="nav-link ">
                                Products
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='categories' className="nav-link">
                                categories
                        </Link></li>

                        <li className='nav-item'>
                            <Link to='brands' className="nav-link">
                                brands
                            </Link>
                        </li>



                    </ul>
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0 d-flex align-items-center">

                        {/* <li className="nav-item d-flex align-items-center">
                            <i className='fa-brands fa-facebook-f mx-2'></i>
                            <i className='fa-brands fa-twitter mx-2'></i>
                            <i className='fa-brands fa-instagram mx-2'></i>
                            <i className='fa-brands fa-youtube mx-2'></i>
                        </li> */}

                        {
                            !isLogin ? <>
                                <li className="nav-item">
                                    <Link to='register' className="nav-link">
                                        register
                                    </Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to='login' className="nav-link">
                                        log in
                                    </Link>
                                </li>
                            </> : <>
                                <li className='nav-item'>
                                    <Link to='cart' className="nav-link d-flex cursor-pointer">
                                        <div className="cart-box d-inline-block position-relative">
                                            <i className="fa-solid fa-cart-shopping fa-2x"></i>
                                            <span className='position-absolute   cart  text-white fw-bolder fs-1x'>{cartNums}</span>
                                        </div>
                                    </Link>
                                </li>

                                <li className='nav-item'>
                                    <span className="nav-link cursor-pointer" onClick={LogOut}>log out</span>
                                </li>
                            </>
                        }





                    </ul>


                </div>
            </div>
        </nav>

    )
}


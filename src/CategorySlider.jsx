import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import Slider from "react-slick";
export default function CategorySlider() {

    const BaseUrl = 'https://ecommerce.routemisr.com'
  
    function getData()
    {
        return axios.get(`${BaseUrl}/api/v1/categories`)
    }

    const {data}= useQuery('categories',getData)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
      };

  return (
  <div className="px-5 d-md-block d-none my-5">
    <Slider {...settings} className='my-4'>
        {data?.data.data.map((cat)=>
        <>
        <img key={cat.image}  className='w-100 cat' src={cat.image} alt='img'></img>
        <p className='fw-bold h4'>{cat.name}</p> 
        </>
        )}
    </Slider>
  </div>
  )
}

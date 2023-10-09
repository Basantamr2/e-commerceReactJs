import React from 'react'
import Slider from "react-slick";
import slide1  from '../assets/images/41nN4nvKaAL._AC_SY200_.jpg'
import slide2  from '../assets/images/61cSNgtEISL._AC_SY200_.jpg'
import slide3  from '../assets/images/XCM_Manual_1396328_4379574_Egypt_EG_BAU_GW_DC_SL_Jewelry_379x304_1X._SY304_CB650636675_.jpg'
import image1  from '../assets/images/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg'
import image2  from '../assets/images/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg'
let sliders =[slide1,slide2,slide3]

export default function MainSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      };
  return (
    <div className='container mt-5 d-md-block d-none'>
        <div className="row gx-0 w-50 m-auto">
            <div className="col-lg-6 col-md-6 mt-5">
            <Slider {...settings} >
              {sliders.map((img)=><img key={img} height={455} alt='img'  src={img}></img> )}
            </Slider>
            </div>
            <div className="col-lg-6 d-lg-block  d-none mt-5">
                <img src={image1} height={240} className='w-100' alt="img" />
                <img src={image2}  height={240} className="w-100" alt="img" />
            </div>
        </div>
    </div>
  )
}

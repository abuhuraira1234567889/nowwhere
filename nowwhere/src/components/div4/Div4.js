import React from 'react';
import './div4.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Div4 = () => {

    const arr=[
        {
            alink:"https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/cArtboard-4-768x768.png"
        },
        {
            alink:"https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/Artboard-6-768x768.png"
        },
        {
            alink:"https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/eArtboard-8-copy-768x768.png"
        },
        {
            alink:"https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/Artboard-5-768x768.png"
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        arrow:false,
        autoplaySpeed:2000,
    
        responsive:[{
            breakpoint:767,
            settings:{
                slidesToShow:1
                
            }
        },{ 
            breakpoint:520,
            settings:{
                slidesToShow:1
            },
            breakpoint:992,
            setting:{
                slidesToShow:2
            }

    
        }]
      };

    return (
        <div className='container div4-wrapper'>
    
        <Slider {...settings} >
      {
              arr.map((img)=>(
                <div className='div4-content'>
                <img className='div4-img' src={img.alink} alt="" />
                </div>

              ))
          
        }

         
          
       
          
        </Slider>
      </div>

    )
}
        
        

export default Div4;

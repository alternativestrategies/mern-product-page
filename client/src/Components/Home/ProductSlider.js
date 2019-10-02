import React from 'react';
import Slider from 'react-slick';
import Products from '../../Data.json';


const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
}

const ProductSlider = () => {
  return(
<div className="slider">  
      <h2 className="pt-4 pb-2">Search Products</h2>  
        <Slider {...settings}>
          {Products
          .map( product => 
            
            <div key={product.id} className="slide">
          
            <img 
                src={product.photos} 
                alt={product.name}/>
            
            </div>
            )}
        </Slider>
      </div>
  );
}

export default ProductSlider;
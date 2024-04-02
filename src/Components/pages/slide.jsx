import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="imagen1.jpg" alt="Imagen 1" />
      </div>
      <div>
        <img src="imagen2.jpg" alt="Imagen 2" />
      </div>
      <div>
        <img src="imagen3.jpg" alt="Imagen 3" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
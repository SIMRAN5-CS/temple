import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './index.css'; // Assuming you have your Tailwind CSS imports here

const AutoSliderCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    '/hero1.webp',
    '/hero2.webp',
    '/hero3.webp'
  ];

  return (
    <div className="w-full relative overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-96 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center w-full h-full"
              style={{ backgroundImage: `url(${image})` }}
            />
            {/* <h1 className="relative text-white text-2xl">Slide {index + 1}</h1> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoSliderCarousel;

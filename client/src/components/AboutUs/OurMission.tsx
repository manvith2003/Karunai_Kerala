import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Curve, OurMissionArrowLeft, OurMissionArrowRight, OurMissionImage } from '../../assets';

const TextSlider: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
  };

  const textItems = [
    "“To provide a seamless platform for those ready to support the needy, ensuring a hassle-free experience.”",
    "“To implement recognition programs to highlight and reward acts of kindness and service within the community.”",
  ];

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPreviousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className='w-full 2xl:min-h-[80vh] flex flex-col md:flex-row justify-center items-center'>
      <img src={OurMissionImage} alt="" className='hidden md:flex md:w-[350px] xl:w-[500px]' />
      <div className="right w-full flex flex-col md:flex-row justify-center md:w-1/2 p-0">
        <div className="container flex md:w-[80%] w-full space-x-6 pt-3 items-center justify-center flex-col pr-10">
          <div className="items-center justify-center flex flex-col mb-[10px]">
            <h1 className="font-poppins ml-10 md:ml-0 text-[30px] md:text-[30px] lg:text-[50px] sm:text-[50px] font-medium bg-gradient-to-r from-[#023642] to-[#32CEFF] bg-clip-text text-transparent">
              Our Mission
            </h1>
            <img
              src={Curve}
              alt="curved-logo"
              className="w-24 sm:w-20 md:w-24"
            />
          </div>
          <img src={OurMissionImage} alt="" className='w-[250px] mr-20 md:hidden' />
          <div className='w-[80vw] my-5 md:w-full'>
            <Slider ref={sliderRef} {...settings}>
              {textItems.map((text, index) => (
                <Typography 
                  key={index} 
                  variant='h6'
                  align="center" 
                  sx={{ fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem', lg: '2rem', xl: '2.5rem' } }}
                >
                  {text}
                </Typography>
              ))}
            </Slider>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              {currentSlide > 0 && (
                <img src={OurMissionArrowLeft} onClick={goToPreviousSlide} alt="" className='w-12 lg:w-16 cursor-pointer mx-auto' />
              )}
              {currentSlide < textItems.length - 1 && (
                <img src={OurMissionArrowRight} onClick={goToNextSlide} alt="" className='w-12 lg:w-16 cursor-pointer mx-auto' />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSlider;

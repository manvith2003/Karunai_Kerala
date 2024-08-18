import React from 'react';
import { Curve, ProvidersCanEcllipse, ProvidersCanImage } from '../../assets';

const ProvidersCan: React.FC = () => {
  return (
    <div>
      {/* Blue Passage */}
      <div className='flex justify-center items-start text-center xl:px-60 md:py-10 bg-[#003B54] text-white font-poppins font-semibold italic xl:text-4xl lg:text-2xl md:text-lg text-[12px] md:px-10 px-4 py-5'>
        ❖ <p>The Karunai project aims to connect good-hearted people with those in need, conveniently</p> ❖
      </div>

      {/* Providers Can Section */}
      <div className="w-full md:h-[60vh] xl:h-[90vh] h-full bg-[#00d2ee1d]  flex flex-col-reverse md:flex-row justify-center items-center xl:gap-[10vh]">
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-poppins font-semibold xl:text-6xl lg:text-4xl md:text-4xl text-2xl mt-[100px] sm:mt-0'>PROVIDERS CAN</h1>
          <div><img src={Curve} alt="" className='w-[120px] sm:hidden'/></div>
          <div className="flex flex-col justify-start items-start text-left my-10 font-poppins font-medium xl:text-4xl lg:text-2xl md:text-lg text-sm md:ml-10 mx-4 md:w-[60vw] leading-8 md:leading-10  lg:leading-[50px] xl:leading-[60px]">
          <p className='flex gap-2'><span>&bull;</span><span> Select the type of items to donate (clothes, food, study tools, etc.).</span></p>
          <p className='flex gap-2'><span>&bull;</span><span> Specify the quantity and cost of each item.</span></p>
          <p className='flex gap-2'><span>&bull;</span> <span> Choose the timing for distribution at the venue.</span></p>
          </div>
        </div>
        <div className='relative top-[50px] sm:top-0 md:mr-10'>
          <img src={ProvidersCanImage} alt="" className='relative xl:w-[400px] lg:w-[250px] md:w-[200px] w-[250px] rounded-full z-[10]' />
          <div className='absolute xl:w-[140px] xl:h-[140px] lg:w-[100px] lg:h-[100px] w-[100px] h-[100px] bg-[#00D1EE] opacity-40 rounded-full xl:top-[280px] xl:left-[280px] lg:top-40 lg:left-40 md:top-[140px] md:left-[120px] -top-10 left-[150px]' />
        </div>
      </div>
      <div className='relative sm:hidden flex justify-end items-end my-20'>
      <img src={ProvidersCanEcllipse} alt="" className='absolute -top-36'/>
      </div>
    </div>
  );
}

export default ProvidersCan;

import React from 'react'
import { Curve, TheSystemWillArrrangeForImage } from '../../assets'

const TheSystemWillArrrangeFor: React.FC = () => {
  return (
    <div className="w-full md:h-[60vh] xl:h-[90vh] h-full bg-[#00d2ee1d]  flex flex-col-reverse md:flex-row justify-center items-center xl:gap-[10vh]">
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-poppins font-semibold xl:text-6xl lg:text-4xl md:text-4xl text-2xl mt-[100px] text-left pl-7 sm:mt-0'>THE SYSTEM WILL ARRANGE FOR</h1>
        <div><img src={Curve} alt="" className='w-[120px] sm:hidden' /></div>
        <div className="flex flex-col justify-start items-start text-left my-10 font-poppins font-medium xl:text-4xl lg:text-2xl md:text-lg text-sm md:ml-10 mx-4 md:w-[60vw] leading-8 md:leading-10  lg:leading-[50px] xl:leading-[60px]">
          <p>&bull; All items to be ready at the selected venue.</p>
          <p>&bull; Support from NGOs and volunteer groups for item preparation.</p>
        </div>
      </div>
      <div className='relative top-[50px] sm:top-0 md:mr-10'>
        <div className='absolute xl:w-[140px] xl:h-[140px] lg:w-[100px] lg:h-[100px] w-[100px] h-[100px] bg-[#00D1EE] opacity-40 rounded-full xl:left-[280px] lg:left-40 md:top-[-30px] md:left-[120px] -top-10 left-[150px]' />
        <img src={TheSystemWillArrrangeForImage} alt="" className='relative xl:w-[400px] lg:w-[250px] md:w-[200px] w-[250px] rounded-full md:z-[10]' />
      </div>

    </div>
  )
}

export default TheSystemWillArrrangeFor

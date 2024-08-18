import React from 'react'
import { HorizontalArrowLine, KarunaiLastImage } from '../../assets'

const Contribute: React.FC = () => {
  return (
    <div className="w-full md:h-[65vh] xl:h-[90vh] h-full bg-[#00d2ee1d]  flex flex-col-reverse md:flex-row justify-center items-center xl:gap-[10vh]">
        <div className='flex flex-col justify-center items-center text-center font-poppins font-medium w-[85vw] sm:w-[60vw] xl:text-3xl md:text-md text-sm sm:p-10 p-5 leading-7 lg:leading-8 xl:leading-[50px]'>
          <p>
          “We aim to foster a culture of compassion among those who can afford 'Karunai.' By raising awareness, promoting social responsibility, and encouraging philanthropy, we empower individuals and businesses to support the less fortunate. Through these efforts, we strive to create a society where the spirit of 'Karunai' thrives, positively impacting lives across the socio-economic spectrum.”
          </p>
          <div>
            <img src={HorizontalArrowLine} alt="" className='my-5 xl:w-[500px]' />
          </div>
          <button className="xl:text-3xl md:text-2xl text-xl w-[200px] font-poppins font-medium text-white bg-[#0098D9] px-4  md:block py-[5px] xl:py-3 lg:w-[300px] shadow-md shadow-slate-500 rounded-lg hover:drop-shadow-2xl ">
          Contribute
        </button>
        </div>
        <div className='bg-[#00d2ee8b] sm:h-full h-[300px] flex justify-center items-center sm:w-[60vw] w-full'>
          <div className='xl:w-[370px] xl:h-[370px] lg:w-[300px] lg:h-[300px] w-[250px] h-[250px] rounded-full bg-[#2cb5c7f2] flex justify-center items-center'>
          <img src={KarunaiLastImage} alt="" className='relative xl:w-[300px] xl:h-[300px] lg:w-[250px] md:w-[200px] w-[180px] ' />
          </div>
        </div>
      </div>
  )
}

export default Contribute

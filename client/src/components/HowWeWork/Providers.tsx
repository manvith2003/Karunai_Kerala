import React from 'react'
import { Curve, ProvidersImage, TheSystemWillArrrangeForEcllipse } from '../../assets'

const Providers: React.FC = () => {
    return (
        <div className='w-full md:h-[60vh] xl:h-[90vh] h-full flex flex-col md:flex-row justify-center items-center xl:gap-[5vh] mt-10'>
            <div className='relative sm:hidden flex justify-end items-end w-full my-14'>
                <img src={TheSystemWillArrrangeForEcllipse} alt="" className='absolute bottom-[-50px]' />
            </div>
            <div className='relative mx-10'>
                <div className='absolute xl:w-[170px] xl:h-[150px] lg:w-[120px] lg:h-[100px] md:w-[100px] md:h-[80px] w-[100px] h-[80px] bg-[#00D1EE] opacity-40 z-[-10] xl:right-[250px] lg:right-[170px] md:right-[120px] right-[180px] md:rounded-2xl rounded-xl sm:-top-14 -top-7 ' />
                <img src={ProvidersImage} alt="" className='relative xl:w-[350px] lg:w-[250px] md:w-[200px] w-[250px] md:z-[10]' />
            </div>
            <div className='flex flex-col justify-center items-center w-[4/5]'>
                <h1 className='font-poppins font-semibold xl:text-6xl lg:text-4xl md:text-4xl text-2xl mt-10 sm:mt-0'>PROVIDERS</h1>
                <div><img src={Curve} alt="" className='w-[120px] sm:hidden' /></div>
                <div className="flex flex-col justify-start items-start text-left my-10 font-poppins font-medium xl:text-4xl lg:text-2xl md:text-lg text-sm md:ml-10 mx-4 md:w-[55vw] w-full leading-8 md:leading-10  lg:leading-[40px] xl:leading-[60px] p-4">
                    <p>&bull; Just need to come to the venue/care institution with their family/kids.</p>
                    <p>&bull; Distribute the items they selected to the needy persons or care institutions in their own  hands.</p>
                </div>
            </div>

        </div>
    )
}

export default Providers

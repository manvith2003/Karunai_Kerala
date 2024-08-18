import { OurVisionImage, OurVisionMobile } from "../../assets"


const OurVision = () => {
  return (
    <div className="ourvision flex flex-col sm:flex-row my-[50px] items-center justify-center w-full 2xl:h-[80vh] md:px-5 lg:px-20 gap-[40px] md:gap-0 xl:gap-[40px]">
      <div className="left flex flex-col items-center sm:w-1/2 xl:w-2/5 gap-[2vw]">
          <h1 className="font-poppins text-[40px] font-medium sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-left sm:mr-auto lg:mb-[40px] mb-[20px]">
            About Us
          </h1>

        <h1 className="sm:mr-auto mb-[10px] text-[27px] sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-medium text-gradient">
          Our Vision
        </h1>
        <p className="px-10 sm:px-0 sm:mr-auto font-poppins text-[16px] sm:text-2xl md:text-xl xl:text-3xl font-semibold text-center sm:text-left" style={{ lineHeight: "max(25px,3.5vw)"}}>
          To bridge the gap between care providers and care-needed people and to
          foster a friendly environment of service, love, and care for all
          involved
        </p>
    </div>
    <div className="right">
        <img src={OurVisionImage} alt="Our Vision Image" className=" hidden sm:flex flex-grow-1 flex-1 md:w-[70vw] lg:w-[60vw] xl:w-[45vw]"/>
        <img src={OurVisionMobile} alt="Our Vision Mobile" className="w-full sm:hidden"/>
    </div>
    </div>
  )
}

export default OurVision

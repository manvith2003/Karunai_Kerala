import { DesignImage, HomePageImage, LowerGreyHomePage, LowerLeftCornerDesign, LowerRightCornerDesign } from "../../assets"

const Hero = () => {
  return (
    <div className="w-full xl:h-screen p-0 m-0">
      <div className="container w-full xl:w-2xl flex flex-col justify-center flex-grow items-stretch sm:relative md:-top-[20vw] lg:top-[-35vw] xl:top-[-20vw] ">
        {/* Main Content  */}
        <div className="main-content items-center sm:w-[100vw] xl:items-center sm:grid sm:grid-cols-2 grid-rows-2 sm:mt-40 sm:gap-[2vw]  md:gap-x-[5vw] lg:gap-x-[5vw] lg:mt-[30vh] xl:mt-[30vh] xl:min-w-full p-0">
          {/* Passage */}
          <div className="w-[70vw] passage font-sansitaSwashed text-3xl mt-[10vw] mx-auto sm:ml-[100px] sm:mt-[10vh] lg:ml-[20vw] text-center font-medium order-1 sm:w-[40vw] lg:text-5xl">
            “To those in need of{" "}
            <span className="text-customBlue mx-2"> Karunai </span> and to those
            who are ready to afford”
          </div>

          {/*Circular Image desktop view */}
          <div className="hidden sm:block md:mt-[7vw] xl:mt-[2vw] md:w-[40vw] lg:w-[35vw] xl:w-[35vw] lg:top-[150px] lg:ml-auto p-0 xl:ml-auto order-2 ml-[10vw] m-0 row-span-2">
            <img src={DesignImage} className="w-[35vw] sm:w-[50vw] xl:w-[40vw] xl:mt-[10vh]" alt="" />
          </div>

          {/*Circular Image Mobile View   */}
          <div className="w-[27vh] sm:hidden mx-auto mt-[3vh] rounded-full shadow-md shadow-black">
            <img src={HomePageImage} alt="Home Page Image" />
          </div>

          {/* Buttons  */}
          <div className="w-[90vw] mx-auto flex flex-col justify-evenly items-center order-3 sm:w-[45vw] md:w-[55vw] sm:flex-row sm:justify-start sm:items-center sm:mb-auto md:ml-[10vw] lg:mt-[5vh] lg:ml-[10vw] px-2 gap-[1vh] my-4 xl:mt-[-9vh]">
            <button className="bg-customBlue text-white w-full text-poppins text-2xl py-1 px-2 font-medium rounded-lg sm:w-[15vw] sm:text-xl md:w-[20vw] lg:text-[25px] lg:w-[15vw] lg:p-3 lg:ml-auto lg:mr-2 shadow-md shadow-slate-500">
              Join Us
            </button>

            <div className="h-1 w-[60vw] bg-gray-400 my-[1vh] sm:w-1 sm:h-[4vh] md:mx-5" />
            <button className="bg-[#9fd3ea] text-[#676666] w-full text-poppins text-2xl py-1 font-medium rounded-lg sm:w-[15vw] sm:text-xl md:w-[20vw] lg:text-[25px] lg:w-[15vw] lg:p-3 lg:mr-auto shadow-md shadow-slate-500">
              Learn More
            </button>
          </div>
        </div>

        {/* Ellipse  */}
        <div className="hidden ellipse relative sm:flex w-[300px] justify-center items-center lg:-left-[10vw] md:top-[-100px] xl:top-[-300px] mx-auto">
          <div className="blue xl:w-[150px] xl:h-[150px] w-[120px] h-[120px] rounded-full bg-customBlue z-[-10] absolute" />
          <div className="gery xl:w-[110px] xl:h-[110px] w-[80px] h-[80px] rounded-full bg-slate-500 opacity-50 z-[10] relative left-16 xl:left-20" />
        </div>

        {/* Lower Right Grey Design */}
        {/* <div className="hidden sm:block design-bottom-left-grey absolute xl:top-[-15vh] lg:top-[-400p] p-0 left-[20vh] sm:left-[50vh] md:left-[40vh] right-[0px] xl:right-0 xl:left-[60vw] z-[-10] h-[80vw]">
          <img src={LowerGreyHomePage} alt="" className="relative w-[300px] z-[-20] md:w-[300px] md:top-[250px] lg:top-[40vh] xl:top-[50vh] right-0 xl:right-[-6.3vw] sm:w-[100px] lg:w-[500px]" />
        </div> */}

        {/* Lower Right Blue Design */}
        {/* <div className="hidden sm:block design-bottom-left-blue absolute lg:top-[-400p] p-0 left-[20vh] sm:left-[50vh] md:left-[40vh] right-[0px] lg:right-[0px] xl:right-0 xl:xl:left-[60vw] z-[-5] h-[80vw]">
          <img src={LowerRightCornerDesign} alt="" className="relative md:w-[300px] md:top-[0px] w-[300px] lg:top-[30vh] xl:top-[65vh] right-0 xl:right-[-6.3vw] lg:w-[500px]" />
        </div> */}

        {/* Lower Left Blue Design  */}

        <div className="hidden sm:block design-bottom-left md:top-[50vh] xl:top-[100vh] top-[60vh] absolute lg:top-[800px] left-0 z-[-10]">
          <img src={LowerLeftCornerDesign} alt="" className="w-[100px] z-[-15] lg:bottom-0 left-0 sm:w-[100px] lg:w-[150px]" />
        </div>
      </div>
    </div>
  )
}

export default Hero

import curved_logo from "../../assets/logos/curved-line.png";
import aboutus1 from "../../assets/homepage_images/aboutus1.png";
import aboutus2 from "../../assets/homepage_images/aboutus2.png";
import aboutus3 from "../../assets/homepage_images/aboutus3.png";
import aboutus4 from "../../assets/homepage_images/aboutus4.png";

function Aboutus(): JSX.Element {
  return (
    <div className=" container flex flex-col md:flex-row h-full px-5 w-full">
      <div className=" container flex flex-col items-center space-y-10 md:w-[50%] w-[100%] my-auto">
        <div className=" flex flex-col items-center">
          <h1 className="font-poppins text-5xl font-medium sm:text-5xl md:text-7xl">
            About Us
          </h1>
          <img
            src={curved_logo}
            alt="curved-logo"
            className="w-32 sm:w-42 md:w-52"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-medium bg-gradient-to-r from-[#00A7DC] to-[#3D3D3D] bg-clip-text text-transparent">
          Our Vision
        </h1>
        <p className="font-poppins text-2xl font-medium w-10/12 text-center leading-snug sm:text-3xl md:text-4xl">
          To bridge the gap between care providers and care-needed people and to
          foster a friendly environment of service, love, and care for all
          involved
        </p>
        <button className="text-3xl font-poppins font-medium text-white bg-[#0098D9] px-4 hidden md:block py-2 rounded-lg hover:drop-shadow-2xl ">
          Learn More
        </button>
      </div>
      <div className="flex md:w-[50%] w-[100%] space-x-4 pt-3 items-center justify-center">
        <div className="flex md:w-[40%] flex-col space-y-6">
          <img src={aboutus1} className=" h-[300px] mt-6 md:py-0 " />
          <img src={aboutus3} className="h-[350px] hidden md:block " />
        </div>
        <div className="flex md:w-[40%] flex-col space-y-4">
          <img src={aboutus2} className="h-[200px] mt-6 md:block hidden" />
          <img src={aboutus4} className="h-[450px] md:block hidden" />
        </div>
      </div>
      {/* <button className="text-[25px]  font-poppins font-medium text-white bg-[#0098D9]  px-[70px] md:hidden py-0 md:py-2 rounded-xl md:rounded-lg hover:drop-shadow-2xl my-[80px]">
        Learn More
      </button> */}
      <button className="items-center md:text-4xl text-[25px] font-poppins font-medium text-white bg-[#0098D9] px-[30px] mx-12 md:hidden md:px-1 py-1 md:py-2 rounded-xl md:rounded-lg hover:drop-shadow-2xl my-[80px] ">
        Learn More
      </button>
    </div>
  );
}

export default Aboutus;

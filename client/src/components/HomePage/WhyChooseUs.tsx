// import chooseus1 from "../assets/homepage_images/chooseus1.png";
import whychooseus from "../../assets/homepage_images/why choose us.jpg";
// import shadow_svg from "../assets/homepage_images/shadow_svg.png";
import curved_logo from "../../assets/logos/curved-line.png";

function WhyChooseUs(): JSX.Element {
  return (
    <div className="container flex flex-col-reverse md:flex-row h-full w-full px-1 pt-[20px] my-[50px]">
      <div className="flex flex-col items-center  md:w-[50%] w-[100%] my-[20px] pt-[30px]">
        <img
          src={whychooseus}
          alt="curved-logo"
          className="w-[316px] h-[232px] sm:max-md:w-[350px] sm:max-md:h-[250px] md:w-[500px] md:h-[400px] md:mt-[100px] md:mb-[50px]"
        />

        <br></br>
        <br></br>
        <button className="md:text-3xl text-[25px] font-poppins font-medium text-white bg-[#0098D9] px-[130px] md:px-4 py-1 md:py-2 rounded-xl md:rounded-lg hover:drop-shadow-2xl">
          Become a Part
        </button>
      </div>
      <div className="container flex md:w-[50%] w-[100%] space-x-6 pt-3 items-center justify-center flex-col pr-[20px]">
        <div className="items-center justify-center flex flex-col md:mb-[90px] mb-[50px]">
          <h1 className="font-poppins text-[50px] md:text-[70px] sm:text-[50px] font-medium">
            Why Choose Us?
          </h1>
          <img
            src={curved_logo}
            alt="curved-logo"
            className="w-32 sm:w-42 md:w-52 "
          />
        </div>
        <p className="font-poppins text-[25px] md:text-[33px] font-medium w-10/12 text-center leading-snug pb-[40px]">
          Many people want to help and have the money to do so, but they lack
          time, energy, and planning. They wish to donate or volunteer but are
          often hindered by logistical challenges rather than a lack of funds.
          Our platform bridges this gap, making it easier for them to
          contribute.
        </p>
      </div>
    </div>
  );
}

export default WhyChooseUs;

import React from "react";
import { ClosingingQuote, OpeningQuote, QuoteBg, QuoteImage } from "../../assets";

const Quote: React.FC = () => {
  return (
    <div className="w-full xl:h-screen flex flex-col md:flex-row justify-center items-center gap-8 md:mt-[-100px] lg:mt-[-200px] xl:mt-[-50px]">
      {/* Quote Image */}
      <div className="relative w-full md:w-1/2 flex justify-center items-start">
        <img
          src={QuoteImage}
          alt="Quote Image"
          className="relative z-10 w-[35vh] sm:w-[65vh]"
        />
      </div>

      {/* Quote Passage */}
      <div className="passage w-full sm:w-1/2 lg:mt-[150px] lg:w-1/2 xl:w-2/5 flex flex-col items-end justify-end sm:items-start gap-4 px-[15vw] sm:p-[12px]">
        <div className="content text-center  text-sawarbiGothic text-2xl sm:text-4xl lg:text-5xl font-medium flex justify-start sm:text-right p-0 m-0">
          <img
            src={OpeningQuote}
            alt="Opening Quote"
            className="w-8 h-8 sm:w-10 sm:h-10 right-[-3]"
          />
          <span style={{ lineHeight: "max(35px,5vw)" }}>
            The best way to find happiness is to find it in making others happy.
          </span>
          <img
            src={ClosingingQuote}
            alt="Closing Quote"
            className="w-8 h-8 sm:w-10 sm:h-10 ml-2 z-[10] mt-[max(15vw,17vh)]"
          />
        </div>
        <div className="passage-bottom flex justify-center items-center sm:justify-end mx-auto my-4 sm:mx-0 sm:ml-auto sm:pr-16">
          <div className="w-3 h-3 rounded-full bg-black"></div>
          <hr className="w-[max(250px,20vw)] h-1 bg-black" />
          <div className="w-3 h-3 rounded-full bg-black"></div>
        </div>
        <div className="author-name flex justify-center sm:justify-end w-full">
          <h2 className="text-sawarbiGothic text-xl sm:text-2xl sm:pr-16">
            Robert G. Ingersoll
          </h2>
        </div>
        {/* Ellipse  */}
        <div className="ellipse flex justify-end items-center my-4 sm:ml-auto sm:mr-8">
          <div className="grey w-12 h-12 bg-ellipseGrey rounded-full mx-2"></div>
          <div className="blue hidden sm:block w-20 h-20 bg-customBlue rounded-full mx-2 "></div>
        </div>
      </div>
    </div>
  );
};

export default Quote;

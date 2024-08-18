
import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className=" bg-sky-100 pb-8">
      <div className="w-full relative bg-edf8ff overflow-hidden flex flex-col items-center justify-start px-1 176px padding-15xl box-border leading-normal tracking-normal bg-c8f9ff lg:px-30 lg:pb-10 lg:pr-var(--padding-12xl) md:pl-var(--padding-xl)">
        <section className="flex items-center justify-between pt-20 px-14 relative w-1376 max-w-full text-center text-5xl text-black font-poppins">
          <div className="w-1210 relative font-medium inline-block flex-shrink-0 max-w-full md:text-30">
            <div className="flex flex-col items-center justify-center max-w-full pb-16">
              <h1 className="m-0 text-3xl font-medium whitespace-nowrap md:text-5xl lg:text-5xl xl:text-6xl ">
                Contact Us
              </h1>
              <div className="self-stretch flex flex-row items-start justify-center px-16 md:px-24">
                <img
                  className="h-8.55 w-40 relative mt-2"
                  alt="Logo"
                  src="/inquiry.svg"
                />
              </div>
            </div>
            
            <div
              className=" text-slate-700 text-center mx-auto 
            md:w-6/12
            sm: text-xl w-fit
            lg:text-3xl 
            leading-9 sm:leading-9 lg:leading-9
            "
            >
              For any inquiries regarding Karunai and our initiatives, please
              send us a message. We are committed to responding promptly and
              look forward to addressing your questions or concerns.
            </div>
          </div>
        </section>

       

<section className="flex flex-col items-center justify-center gap-8 flex-wrap sm:gap-4">

<div className="flex justify-center items-center w-full gap-36 sm:gap-[600px]">
  <div className="flex-1 flex items-end justify-center">
    <img
      className="w-[100px] h-[100px] lg:w-[100px] lg:h-[150px] sm:w-[100px] sm:h-[100px]"
      loading="lazy"
      alt=""
      src="/rectangle-45@2x.png"
    />
  </div>
  <div className="flex-1 flex items-end justify-center">
    <img
      className="w-[100px] h-[100px] lg:w-[100px] lg:h-[150px] sm:w-[100px] sm:h-[100px]"
      loading="lazy"
      alt=""
      src="/rectangle-44@2x.png"
    />
  </div>
</div>

<div className="flex justify-center items-center mt-1 w-full">
  <button className="cursor-pointer border-0 shadow-2xl w-80 bg-sky-600 rounded-lg text-center flex items-center justify-center hover:bg-sky-950 md:max-w-[350px] md:h-[50px] sm:max-w-[350px] sm:h-[50px]">
    <div className="text-2xl font-bold text-white z-10">
      Message Us
    </div>
  </button>
</div>

<div className="w-full h-auto flex justify-center items-center py-5">
  <div className="w-full max-w-[200px] sm:max-w-[400px] md:max-w-[500px] relative flex justify-center items-center">
    <img
      className="h-auto w-full object-contain relative"
      loading="lazy"
      alt=""
      src="/vector-10.svg"
    />
  </div>
</div>

</section>

      </div>
    </div>
  );
};

export default ContactUs;

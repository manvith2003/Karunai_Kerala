import React from 'react';
import Heart from './Heart';
import Hospital from './Hospital';
import Locations from './Locations';

const ConnectionNav: React.FC = () => {
  return (
    <div className="mb-5">
      <div className="w-full relative bg-sky-100 overflow-hidden flex flex-col items-center justify-start p-6 lg:p-12 box-border gap-8  tracking-widest ">
        <section className=" leading-10 flex flex-col items-center justify-center max-w-full text-center text-2xl lg:text-4xl text-gray-800 font-poppins  mb-8  ">
          <div className=" leading-10 w-11/12 sm:font-poppins lg:font-poppins sm:w-3/5 relative inline-block flex-shrink-0 lg:max-w-1210 lg:w-1210 lg:font-medium  font-poppins">
            <span className="bg-gradient-to-b from-sky-500 to-cyan-500 text-transparent bg-clip-text font-poppins">
              Karunai
            </span>
            <span>
              {" "}
              connects with over 500 contributors, 1,000 care providers, and
              multiple NGOs, ensuring love, care, and support for
            </span>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-48 sm:gap-16">
          <Heart />
          <Hospital />
          <Locations />
        </section>
      </div>
    </div>
  );
};

export default ConnectionNav;

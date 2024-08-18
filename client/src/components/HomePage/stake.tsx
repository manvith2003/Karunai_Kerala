
import React, { useState } from 'react';

const StakeholdersComponent: React.FC = () => {
  // Initial images to display
  const initialImages = [
    { src: '/rectangle-20@2x.png', label: 'Partner A' },
    { src: '/rectangle-21@2x.png', label: 'Partner B' },
    { src: '/rectangle-22@2x.png', label: 'Partner C' },
    { src: '/rectangle-23@2x.png', label: 'Partner D' },
  ];

  // Additional images to show on "See More" click
  const moreImages = [
    { src: '/rectangle-24@2x.png', label: 'Partner E' },
    { src: '/rectangle-25@2x.png', label: 'Partner F' },
    { src: '/rectangle-26@2x.png', label: 'Partner G' },
    { src: '/rectangle-27@2x.png', label: 'Partner H' },
  ];

  // State to manage displayed images and show more images
  const [images, setImages] = useState(initialImages);
  const [showMore, setShowMore] = useState(false); // State to track button text

  // Function to handle "See More" button click
  const handleShowMore = () => {
    if (showMore) {
      setImages(initialImages); // Show only initial images
    } else {
      setImages([...initialImages, ...moreImages]); // Show initial and additional images
    }
    setShowMore(!showMore); // Toggle state
  };

  return (
    <section className="  lg:pb-2 w-full relative bg-white overflow-hidden flex flex-col items-center justify-start p-[60px_0px_60px_0px] gap-[60px]">
      {/* Header section */}
      <header className="w-[512px] flex flex-col items-center justify-start max-w-full text-center text-black font-poppins mb-1">
        <div className="flex flex-col items-center justify-center max-w-full">
          <h1 className="m-0 text-4xl font-medium whitespace-nowrap md:text-5xl sm:text-4xl xs:text-3xl">Our Partners</h1>
          <div className="self-stretch flex flex-row items-start justify-center px-6 py-0">
            <img className="h-[34px] w-[150px] relative" alt="Logo" src="/icon.svg" />
          </div>
        </div>
      </header>

      {/* Horizontal scroll container */}
      <div className="scrollContainer bg-white overflow-x-auto whitespace-nowrap p-5 flex pl-[20px] gap-5 sm:pl-5">
        {images.map((image, index) => (
          <div key={index} className="scrollItem relative flex-none md:mr-8 group">
            <img className="p-2 h-[300px] w-auto transition filter brightness-100 group-hover:brightness-50 duration-300 ease-in-out" src={image.src} alt={image.label} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-shadow transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              {image.label}
            </div>
          </div>
        ))}
      </div>


      
      <div className="w-full flex items-center justify-between relative  mt-3">
  {/* Image */}
  
       <button className="cursor-pointer border-0 p-3  shadow-2xl bg-sky-600 rounded-md hover:bg-sky-900   max-w-[230px] w-full sm:max-w-270px  text-center flex items-center justify-center mx-auto absolute top-[calc(50%-20px)] md:top-[calc(50%-40px)] sm:top-[calc(50%-20px)] left-1/2 transform -translate-x-1/2 hover:bg-darkslategray" onClick={handleShowMore}>
        <div className="w-3 h-3 border-l-2 border-b-2 border-white transform rotate-45 mr-3" />
        <div className="text-2xl font-medium font-poppins text-white z-1">{showMore ? 'See Less' : 'See More'}</div>
      </button>

      {/* Hidden on small screens */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/13e7036e0d40d68c76c4d9e7fa5d670601b50a1d963802012ac090a9b75ea5d0?apiKey=a49156311e464a4e94e3a1e2017a5ce5&"
        className="  sm:fill-white md:block hidden w-full max-w-[140px] aspect-[0.49] lg:fill-white"
      /> 

  <div className="hidden md:flex gap-9  items-center absolute top-[calc(50%+10px)] md:top-[calc(50%-10px)] right-[calc(100%-1300px)] transform -translate-y-1/2">
  <div className="rounded-full bg-[linear-gradient(180deg,#0095B6_0%,#02B7F0_23.5%)] h-[60px] min-h-[60px] w-[60px] mt-[calc(-10px)]" />
  <div className="rounded-full bg-[linear-gradient(180deg,#A3A3A3_0%,#969696_70%)] h-[90px] min-h-[90px] w-[90px]  mt-[calc(-60px)]" />
  <div className="rounded-full bg-[linear-gradient(180deg,#0095B6_0%,#00A7DC_100%)] h-[119px] min-h-[119px] w-[119px]  mt-[calc(-190px)]" />
  </div>
</div>

    </section>
  );

};

export default StakeholdersComponent;


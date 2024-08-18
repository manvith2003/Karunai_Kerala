import { FunctionComponent } from "react";

interface Image {
    src: string;
    label: string;
  }
  
  const images: Image[] = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/69ce57410a39607df367a4b5e8bb9f555d1d9c0387103e78a90ddf457d5f08d4?apiKey=a49156311e464a4e94e3a1e2017a5ce5", label: "Image 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/63e09436de8fdf2cc8f1c1b0aa89722bb1465fd0c7b938f025046c3452bc1afe?apiKey=a49156311e464a4e94e3a1e2017a5ce5", label: "Image 2" },
    // Add more images as needed
  ];



const WhyUs: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-sky-100 overflow-hidden flex flex-col items-center justify-start py-32 px-5 gap-20 text-center font-poppins text-4xl lg:text-[80px]">
      <div className="absolute w-0 h-0 m-0 top-[327px] left-[863px] font-medium" />
      <section className="w-full max-w-[1300px] flex flex-col items-end justify-start pb-8 gap-[57.8px] box-border px-5 lg:px-0">
        <div className="self-stretch flex flex-row items-start justify-center px-5 lg:px-[20px]">
          <div className="flex flex-col items-end justify-center gap-1">
            <div className="relative font-medium text-5xl lg:text-[60px] mx-auto mb-3 tracking-wide">Why Us</div>
            <div className="flex flex-row items-start justify-end py-0 px-[34px]">
              <img className="relative h-[34.2px] w-[150.8px]" alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
        <div className="self-stretch relative font-medium z-10  sm:text-3xl text-xl  leading-10 tracking-wide font-poppins">
          Many generous individuals have the financial means and the desire to
          serve but often lack the time, energy, and plans to do so. While many
          aspire to help, such as by donating food to orphanages on their
          birthdays or supporting old-age homes in memory of their parents, only
          a few manage to follow through. Most are held back by time
          constraints, stress, and logistical challenges, rather than a lack of
          funds.
        </div>
      </section>
     
      <section className="w-full max-w-[1511px] flex flex-row items-start justify-center py-0 box-border px-5 lg:px-0">
      <div className="w-full max-w-[1273px] overflow-x-auto flex flex-row flex-nowrap items-start justify-start gap-8">
        {images.map((image, index) => (
          <div key={index} className="scrollItem relative flex-none group">
            <img
              className="p-2 h-[200px] w-[300px] sm:h-[300px] sm:w-[600px]  shadow-sm transition filter brightness-100 group-hover:brightness-50 duration-300 ease-in-out rounded-md"
              loading="lazy"
              srcSet={`${image.src}?width=100 100w, ${image.src}?width=200 200w, ${image.src}?width=400 400w, ${image.src}?width=800 800w, ${image.src}?width=1200 1200w, ${image.src}?width=1600 1600w, ${image.src}?width=2000 2000w`}
              sizes="(min-width: 640px) 50vw, 100vw"
              alt={image.label}
            />
           
          </div>
        ))}
      </div>
    </section>
    
      <section className="w-full max-w-[1511px] flex flex-row items-start justify-center py-0">
        <button className="shadow-2xl rounded-md bg-[#0098d9] flex items-center hover:bg-sky-900 justify-center py-3 px-5 lg:px-8 whitespace-nowrap max-w-full">
          <div className="font-medium text-white text-2xl lg:text-[30px]">Become a Part</div>
        </button>
      </section>
    </div>
  );
};

export default WhyUs;

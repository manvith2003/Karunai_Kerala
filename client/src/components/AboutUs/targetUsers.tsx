
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function TargetUsers() {
  return (
    <div className="flex justify-center items-center px-16 py-20 font-medium text-center text-gray-700 bg-sky-100 max-md:px-5">
      <div className="flex flex-col items-center mt-5 w-full max-w-[1200px] max-md:max-w-full">
        <div className="text-6xl max-md:max-w-full max-md:text-4xl tracking-wide font-poppins">
          Target Users
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2f11c5b1e4fccc9ed6a46e35bac32b9ebf3332e2478b75dfad8c692d2bce828?apiKey=a49156311e464a4e94e3a1e2017a5ce5&"
          className="mt-3 max-w-full aspect-[5.88] w-[230px]"
        />
        <div className="self-stretch mt-16 sm:text-3xl text-xl md:2xl max-md:mt-14 max-md:max-w-full leading-10 tracking-normal font-poppins">
          People at care institutions such as orphanages, old-age homes, foster
          homes, rehabilitation centers, shelters, halfway houses, etc., where
          individuals lack love, food, clothing, educational materials, mental
          support, quality downtime, and other daily necessities, including
          tutoring.
        </div>

        <section className="self-stretch flex items-center justify-center  py-14 relative mt-16">
          <div className="relative h-[200px] w-[250px] sm:h-[400px] sm:w-[600px]  transition filter brightness-100 hover:brightness-75 duration-300 ease-in-out rounded-md">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={3000}
              className="h-full w-full"
            >
              <div>
                <img className="h-full w-full object-cover" alt="Rectangle 48" src="/targetuser1.png" />
              </div>
              <div>
                <img className="h-full w-full object-cover" alt="Rectangle 49" src="/targetuser2.png"/>
              </div>
              <div>
                <img className="h-full w-full object-cover" alt="Rectangle 50" src="/targetuser3.png" />
              </div>
            </Carousel>
            <img
              className="absolute sm:top-[-10%] sm:left-[2%] sm:h-28 sm:w-28 top-[-14%] left-[-1%] h-14 w-14 z-10 transform -translate-x-1/2"
              loading="lazy"
              alt=""
              src="/group-32@2x.png"
            />
            <img
              className="absolute sm:bottom-[9%] sm:right-[-18%] sm:h-28 sm:w-28 h-14 w-14 bottom-[18%] right-[-24%] z-10 transform -translate-x-1/2"
              loading="lazy"
              alt=""
              src="/group-31.svg"
            />
          </div>
        </section>
      </div>
    </div>
  );
}


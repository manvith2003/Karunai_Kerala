
import { memo } from "react";

interface LocationsProps {
  className?: string;
}

const Locations: React.FC <LocationsProps> = memo(({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-start gap-8 text-center text-[50px] text-black font-poppins ${className}`}>
      <div className="flex items-start justify-start px-[44px]">
        <img
          className="h-[110px] w-[100px] object-cover"
          loading="lazy"
          alt=""
          src="/location.png"
        />
      </div>
      <i className="relative font-medium text-[25px] md:text-[30px]">
        <p className="m-0">10</p>
        <p className="m-0">Different</p>
        <p className="m-0">Location</p>
      </i>
    </div>
  );
});

export default Locations;


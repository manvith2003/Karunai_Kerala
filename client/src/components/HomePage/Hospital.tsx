
import { memo } from "react";

interface HospitalProps {
  className?: string;
}

const Hospital: React.FC <HospitalProps> = memo(({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-start gap-8 text-center text-[50px] text-black font-poppins ${className}`}>
      <div className="flex items-start justify-start px-[44px]">
        <img
          className="h-[100px] w-[100px] object-cover"
          loading="lazy"
          alt=""
          src="/hospital.png"
        />
      </div>
      <i className="relative font-medium text-[25px] md:text-[30px]">
        <p className="m-0">25+</p>
        <p className="m-0">Care</p>
        <p className="m-0">Homes</p>
      </i>
    </div>
  );
});

export default Hospital;

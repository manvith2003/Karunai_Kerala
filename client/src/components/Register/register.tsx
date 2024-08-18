import { FunctionComponent } from "react";
import DesktopRegister from "./Desktop/DesktopRegister";
import MobileRegister from "./Mobile/MobileRegister";
import { useMediaQuery } from "react-responsive";

export type Register = {
  className?: string;
};

const Register: FunctionComponent<Register> = ({className=""}) => {
  const isMobile = useMediaQuery({ maxWidth: 1299}); // Mobile view for screens less than 1000px
  const isDesktop = useMediaQuery({ minWidth: 1300 }); // Desktop view for screens 1000px and wider

  return (
    <div className={className}>
      {isMobile && <MobileRegister />}
      {isDesktop && <DesktopRegister />}
    </div>
  );
}

export default Register;
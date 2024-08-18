import { FunctionComponent } from "react";
import { useMediaQuery } from "react-responsive";
import DesktopLogin from "./Desktop/DesktopLogin";
import MobileLogin from "./Mobile/MobileLogin";

export type LoginType = {
  className?: string;
};

const Login: FunctionComponent<LoginType> = ({ className = "" }) => {
  // Define media query breakpoints
  const isMobile = useMediaQuery({ maxWidth: 1299}); // Mobile view for screens less than 1000px
  const isDesktop = useMediaQuery({ minWidth: 1300 }); // Desktop view for screens 1000px and wider

  return (
    <div className={className}>
      {isMobile && <MobileLogin />}
      {isDesktop && <DesktopLogin />}
    </div>
  );
};

export default Login;

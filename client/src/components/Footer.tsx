import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";

function Footer() {
  return (
    <div className="bg-[#00A4D8] font-medium  pb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[18px] justify-center items-center font-poppins md:grid-flow-row-dense  bg-[#00A4D8] px-[4%] pt-[5%]  text-white">
        <div className="md:order-3 flex flex-col space-y-2 md:text-center p-[10%] md:p-0 ">
          <h2 className="text-[24px] font-medium font-poppins">
            Quick{" "}
            <span className="bg-gradient-to-r from-blue-200 to-[#4CEFE5] bg-clip-text text-transparent">
              Links
            </span>
          </h2>
          <p>Home</p>
          <p>Get Involved</p>
          <p>Contribute</p>
          <p>Media</p>
        </div>
        <div className="md:order-2 px-[10%] md:px-[25%] md:text-center">
          <h2 className="text-[24px] font-medium font-poppins">
            Have{" "}
            <span className="bg-gradient-to-r from-blue-200 to-[#4CEFE5] bg-clip-text text-transparent">
              Qs?
            </span>
          </h2>
          <p className="mb-3">
            Visit our FAQs section for further details or submit if you are
            still not satisfied with the answers
          </p>
          <Button size="large" sx={{ backgroundColor: '#003B54', '&:hover': { backgroundColor: '#002B40' } }} variant="contained" >
            FAQs
          </Button>
        </div>
        <div className="md:order-1 mt-[10%] md:mt-0  pl-[10%]   md:text-left ">
          <h2 className="text-[24px] font-poppins font-medium">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-200 to-[#4CEFE5] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p>
            Email: karunaiindiago@gmail.com <br />
            Address: 12th North Lane, Lorem ipsum, Pala, Kottayam, <br />
            Pincode-635668 <br />
            Ph. No.: +91 999 999 9999
          </p>
          <hr className="my-4 bold md:mr-[25%]" />
          <div className="flex space-x-6">
            <FacebookIcon fontSize="large" sx={{ color: "black" }} />
            <YouTubeIcon fontSize="large" sx={{ color: "black" }} />
            <GoogleIcon fontSize="large" sx={{ color: "black" }} />
          </div>
        </div>
      </div>
      <div className="flex font-bold justify-center mt-10">
        <p className="text-sm text-center">
          © Copyright 2024 Karunai - India 501(c) (3) non-profit organization.
          All rights reserved.| Designed by IIIT KOTTAYAM |{" "}
          <a href="/privacy-policy" className="underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;

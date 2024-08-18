import ellipse2 from "../../assets/logos/Ellipse 2.png";

import curved_logo from "../../assets/logos/curved-line.png";

import how_do_we_work from "../../assets/homepage_images/how do we work.jpg";
import how_do_we_work_2 from "../../assets/homepage_images/how_we_work_2.jpg";
import { Button } from "@mui/material";

function HowWeWork(): JSX.Element {
  return (
    <div className=" w-full h-full flex flex-col mt-[150px] md:mt-[100px]">
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div>
          <img
            src={ellipse2}
            className="absolute left-[35px] md:left-[126px] scale-50 md:scale-90 "
          />
        </div>
        <div className="flex flex-col mx-auto items-center px-3">
          <h1 className="text-center  text-[50px] md:text-[60px] font-medium">
            How Do We Work?
          </h1>
          <img src={curved_logo} className=" w-[190px] md:w-[228px] h-[34px]" />
          <p className="text-[25px] md:text-[35px] font-medium md:w-fit h-fit w-fit md:h-fit text-center mt-[100px] px-[10%] md:px-[10%]">
            Karunai links donors with those in need, making it easy to support
            orphanages and old age homes. Providers select the home, items, and
            timing, while the system manages costs and preparation. Donors
            personally distribute items at the venue, promoting compassion and
            social responsibility.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col">
          <img
            src={how_do_we_work}
            className="px-[10%] mt-[100px] h-[100%] hidden md:block"
          />
          <img
            src={how_do_we_work_2}
            className=" px-[10%] mt-[25%] md:hidden scale-100"
          />
        </div>

        <div className=" flex felx-col justify-center">
          <Button
            variant="contained"
            sx={{
              marginX: "20px",
              marginTop: { md: "0px", xs: "100px" },
              marginBottom: "70px",
              paddingX: "6px",
              width: { md: "350px", xs: "80%" },
              fontSize: { md: "30px", xs: "30px" },
              paddingY: { md: "2px", xs: "0px" },
              backgroundColor: "#0098D9",
              fontFamily: "Poppins",
              borderRadius: { md: "10px", xs: "15px" },
              textTransform: "initial",
              "&:hover": {
                backgroundColor: "#0098D9",
                boxShadow: "10px",
              },
            }}
          >
            Explore Our Work
          </Button>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}

export default HowWeWork;

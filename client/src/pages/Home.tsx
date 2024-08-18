import React from "react";
import Hero from "../components/HomePage/Hero";
import Quote from "../components/HomePage/Quote";
import Aboutus from "../components/HomePage/Aboutus";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";
import HowWeWork from "../components/HomePage/HowWeWork";
import ConnectionNav from "../components/HomePage/ConnectionNav";
import StakeholdersComponent from "../components/HomePage/stake";
import ContactUs from "../components/HomePage/ContactUs";

const Home: React.FC = () => {
  return (
    <div className="home w-full h-full p-0 m-0">
      <Hero />
      <Quote />
      <Aboutus/>
      <WhyChooseUs/>
      <HowWeWork/>
      <ConnectionNav/>
      <StakeholdersComponent/>
      <ContactUs/>
      
    </div>
  );
};

export default Home;

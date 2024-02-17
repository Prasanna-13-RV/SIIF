import React from "react";
import { Services } from "./Services";
import { Helmet } from 'react-helmet'

const Index = () => {
  return (

    <div>
      <Helmet>
        <title>Capital Infusion | SIIF</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center p-10 md:p-32 relative finance">
        <img
          className=" absolute w-full h-full top-0 left-0 object-cover "
          src="https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h1 className=" z-10 font-bold text-xl md:text-4xl mb-16">
          Capital Infusion
        </h1>
        <p className="bg-[#f6f6f6] p-8 border-black border-2  leading-8 shadow-md z-10  w-6/6 lg:w-4/6">
          Welcome to SIIF, your premier destination for capital infusion
          solutions. Whether you're a startup aiming to scale or an established
          business seeking expansion, we provide tailored financing options to
          fuel your growth. With our expertise and flexible approach, we're here
          to be your trusted partner on the journey to success. Get in touch
          today to explore how we can help elevate your business.
        </p>
      </div>

      {/* sain */}
      <div className="w-[90%] md:w-[60%] flex  justify-center items-center h-[150px] md:h-[230px] mx-auto my-[3rem] shadow-md">
        <div className="bg-[#f6f6f6] w-3/6 h-full flex flex-col justify-evenly items-center">
          <h1 className="text-2xl font-bold">SAIN Investors</h1>
          <a href="/infusion/investors" className="navigate-btn4">
            Explore
          </a>
        </div>
        <div className="bg-[#697743] w-3/6 h-full  flex flex-col justify-evenly items-center">
          <h1 className="text-2xl font-bold text-white">SAIN Startups</h1>{" "}
          <a href="/infusion/startups" className="navigate-btn3">
            Explore
          </a>
        </div>
      </div>

      {/* services */}
      <Services />
    </div>
  );
};

export default Index;

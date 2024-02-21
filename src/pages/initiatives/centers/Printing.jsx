import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../../components/common/Hero/HeroSection";

const Printing = () => {
  return (
    <>
      <Helmet>
        <title>3D Printing | SIIF</title>
      </Helmet>
      <HeroSection
        image="https://www.yantrallp.com/blog/wp-content/uploads/2022/01/3d-printer-concept0.jpg"
        title="3D Printing and Additive Manufacturing"
        desc="Welcome to the world of 3D printing and additive manufacturing, where we revolutionize production processes and unlock endless possibilities."
      />
      <div className="w-[90%] lg:w-[80%] my-10 h-fit relative flex flex-col lg:flex-row mx-auto items-center justify-center bg-[#8e8484] rounded-md">
    <div className="w-[90%] lg:w-[45%] lg:py-[5rem] py-[1.5rem] lg:mr-16">
      <h1 className="font-bold  mb-2 lg:mb-5  text-xl md:text-3xl text-[#f6f6f6]">
        3D Printing and Additive Manufacturing
      </h1>
      <p className="leading-[2rem] text-[#f6f6f6] text-justify">
        Our mission is to leverage cutting-edge 3D printing and additive manufacturing technologies to transform the way products are designed, prototyped, and manufactured. With our innovative solutions, we enable rapid prototyping, mass customization, and intricate geometries that were once impossible to achieve. Join us in embracing the future of manufacturing with 3D printing and additive manufacturing.
      </p>
    </div>

    <img
      className="w-[90%] lg:w-[35%]  lg:my-[5rem] my-[3rem]"
      style={{ borderRadius: "3%" }}
      src="https://t4.ftcdn.net/jpg/04/49/30/87/360_F_449308752_xkBGspiOsbAADCkET4ihyznpJ8POHmys.jpg"
      alt="3D Printing and Additive Manufacturing"
    />
  </div>
      <div className="w-[90%] lg:w-[80%] my-10 h-fit relative flex flex-col lg:flex-row mx-auto items-center justify-center  rounded-md">
        <div className="flex flex-col w-full lg:w-[50%] px-[5%] mx-auto  mb-3 lg:mb-0">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            Facilities
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                State-of-the-art 3D printers capable of printing a wide range of
                materials, including plastics, metals, and composites.
              </li>
              <li>
                Advanced CAD/CAM software for designing and optimizing 3D models
                for additive manufacturing.
              </li>
              <li>
                Dedicated production space equipped with climate control and
                safety measures for optimal printing conditions.
              </li>
              <li>
                Quality control and testing facilities to ensure the integrity
                and functionality of printed parts.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-[50%] mx-auto">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            Offerings
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                Customized 3D printing services tailored to your specific
                requirements, from concept to final product.
              </li>
              <li>
                High-quality additive manufacturing solutions for prototypes,
                tooling, and end-use parts.
              </li>
              <li>
                Expert consultation and guidance on material selection, design
                optimization, and production processes.
              </li>
              <li>
                Access to state-of-the-art 3D printers and additive
                manufacturing equipment for in-house or outsourced projects.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Printing;

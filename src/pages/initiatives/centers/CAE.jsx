import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../../components/common/Hero/HeroSection";

const CAE = () => {
  return (
    <>
      <Helmet>
        <title>CAE | SIIF</title>
      </Helmet>
      <HeroSection
        image="https://hmie.in/api/service/download-banner?url=computer-aided-engineering"
        title="Computer-aided Engineering"
        desc="Welcome to Computer-aided Engineering, where we leverage technology to streamline design and analysis processes."
      />
      <div className="w-[90%] lg:w-[80%] my-10 h-fit relative flex flex-col lg:flex-row mx-auto items-center justify-center bg-[#8e8484] rounded-md">
        <div className="w-[90%] lg:w-[45%] lg:py-[5rem] py-[1.5rem] lg:mr-16">
          <h1 className="font-bold  mb-2 lg:mb-5  text-xl md:text-3xl text-[#f6f6f6]">
            Computer-aided Engineering
          </h1>
          <p className="leading-[2rem] text-[#f6f6f6] text-justify">
            Our mission is to revolutionize engineering processes through
            computer-aided design, analysis, and optimization. From concept to
            production, our integrated solutions empower engineers to innovate
            and iterate efficiently, reducing time to market and enhancing
            product performance. Trust Computer-aided Engineering for your next
            project and let us elevate your engineering capabilities.
          </p>
        </div>

        <img
          className="w-[90%] lg:w-[35%]  lg:my-[5rem] my-[3rem]"
          style={{ borderRadius: "3%" }}
          src="https://www.shutterstock.com/image-photo/cae-computeraided-engineering-cobot-robotic-600nw-2252631649.jpg"
          alt=""
        />
      </div>
      <div className="w-[90%]  lg:w-[80%]  flex flex-col lg:flex-row justify-between  py-2 lg:py-5 mt-7 mx-auto text-gray-900 rounded-lg">
        <div className="flex flex-col w-full lg:w-[50%] px-[5%] mx-auto  mb-3 lg:mb-0 ">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            Features
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                Utilize advanced simulation tools for structural, thermal, and
                fluid flow analysis, enabling comprehensive product evaluation
                and optimization.
              </li>
              <li>
                Integrate parametric modeling techniques to explore design
                alternatives rapidly and efficiently, facilitating iterative
                development cycles.
              </li>
              <li>
                Collaborate seamlessly with multidisciplinary teams through
                cloud-based platforms, fostering innovation and accelerating
                decision-making processes.
              </li>
              <li>
                Leverage virtual prototyping capabilities to validate designs
                early in the development cycle, reducing costly physical
                prototypes and minimizing time-to-market.
              </li>
              <li>
                Access extensive libraries of materials, components, and
                manufacturing processes to inform design decisions and ensure
                compatibility with production requirements.
              </li>
              <li>
                Receive comprehensive training and support from our experienced
                team of engineers and consultants, empowering you to maximize
                the value of our software solutions.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%] mx-auto">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            Services
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                Consultation and implementation services to tailor our software
                solutions to your specific business requirements and workflows.
              </li>
              <li>
                Training programs for engineers and designers to develop
                proficiency in CAD, CAE, and CAM software, enhancing
                productivity and innovation capabilities.
              </li>
              <li>
                Customization and automation services to streamline repetitive
                tasks and optimize workflows, maximizing efficiency and reducing
                time-to-market.
              </li>
              <li>
                Technical support and maintenance services to ensure the smooth
                operation of your software applications and resolve any issues
                promptly.
              </li>
              <li>
                Integration services to connect our software solutions with your
                existing IT infrastructure, enabling seamless data exchange and
                collaboration across departments.
              </li>
              <li>
                Continuous updates and enhancements to our software products,
                incorporating the latest advancements in engineering technology
                and industry best practices.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CAE;

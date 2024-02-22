import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../../components/common/Hero/HeroSection";

const EmbeddedIot = () => {
  return (
    <>
      <Helmet>
        <title>Embedded & IoT | SIIF</title>
      </Helmet>
      <HeroSection
        image="https://www.analyticsinsight.net/wp-content/uploads/2023/04/What-is-the-Difference-between-Embedded-Systems-and-IoT-A-Guide.jpg"
        title="Embedded & IoT"
        desc="Welcome to Embedded & IoT, where intelligence meets connectivity for seamless automation and innovation."
      />
      <div className="w-[90%] lg:w-[80%] my-10 h-fit relative flex flex-col lg:flex-row mx-auto items-center justify-center bg-[#8e8484] rounded-md">
        <div className="w-[90%] lg:w-[45%] lg:py-[5rem] py-[1.5rem] lg:mr-16">
          <h1 className="font-bold  mb-2 lg:mb-5  text-xl md:text-3xl text-[#f6f6f6]">
            Embedded & IoT
          </h1>
          <p className="leading-[2rem] text-[#f6f6f6] text-justify">
            Our mission is to harness the power of embedded systems and IoT
            technologies to create smart and connected solutions for diverse
            applications. From intelligent devices to networked systems, our
            expertise in hardware and software development enables us to deliver
            innovative solutions that drive efficiency, productivity, and
            sustainability. With a focus on seamless integration and
            interoperability, we empower businesses to unlock new opportunities
            and enhance the quality of life through intelligent automation.
            Trust Embedded & IoT for your next project and embark on a journey
            of digital transformation.
          </p>
        </div>

        <img
          className="w-[90%] lg:w-[35%]  lg:my-[5rem] my-[3rem]"
          style={{ borderRadius: "3%" }}
          src="https://www.timesys.com/wp-content/uploads/vulnerability-management-IoT-embedded-systems.jpg"
          alt=""
        />
      </div>
      <div className="w-[90%]  lg:w-[80%]  flex flex-col lg:flex-row justify-between  py-2 lg:py-5 mt-7 mx-auto text-gray-900 rounded-lg">
        <div className="flex flex-col w-full lg:w-[50%] px-[5%] mx-auto  mb-3 lg:mb-0 ">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            Embedded Systems
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                Develop custom embedded systems and firmware tailored to your
                specific requirements and performance criteria, ensuring optimal
                functionality and reliability.
              </li>
              <li>
                Design low-power and high-performance microcontroller-based
                solutions for a wide range of applications, from consumer
                electronics to industrial automation.
              </li>
              <li>
                Implement real-time operating systems (RTOS) and middleware to
                facilitate multitasking and efficient resource management,
                enabling responsive and scalable embedded applications.
              </li>
              <li>
                Integrate sensors, actuators, and communication interfaces to
                enable data acquisition, processing, and control in embedded
                systems, enhancing automation and intelligence.
              </li>
              <li>
                Optimize embedded software and firmware for size, speed, and
                power consumption, leveraging industry best practices and
                optimization techniques to maximize performance and efficiency.
              </li>
              <li>
                Provide comprehensive testing, validation, and certification
                services to ensure compliance with regulatory standards and
                industry requirements, guaranteeing the safety and reliability
                of embedded systems.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%] mx-auto">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            IoT Solutions
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                Develop end-to-end IoT solutions encompassing sensor devices,
                edge computing, cloud platforms, and applications, enabling
                seamless connectivity and data-driven insights.
              </li>
              <li>
                Implement secure and scalable IoT architectures to accommodate
                diverse use cases and deployment scenarios, ensuring data
                privacy, integrity, and availability across the ecosystem.
              </li>
              <li>
                Integrate IoT devices with existing infrastructure and legacy
                systems through standardized protocols and interoperability
                frameworks, facilitating seamless communication and
                interoperability.
              </li>
              <li>
                Utilize data analytics, machine learning, and artificial
                intelligence techniques to extract actionable insights from IoT
                data streams, enabling predictive maintenance, optimization, and
                automation.
              </li>
              <li>
                Enable remote monitoring, control, and management of connected
                devices and assets through web and mobile interfaces, empowering
                users to access and interact with IoT solutions anytime,
                anywhere.
              </li>
              <li>
                Offer consultancy, design, development, deployment, and support
                services to guide organizations through the entire IoT
                lifecycle, from strategy formulation to solution implementation
                and ongoing optimization.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmbeddedIot;

import React from 'react'
import { Helmet } from 'react-helmet'
import HeroSection from '../../../components/common/Hero/HeroSection'

const IndustrialRobotics = () => {
  return (
    <>
      <Helmet>
        <title>Industrial Robotics | SIIF</title>
      </Helmet>
      <HeroSection
        image="https://robodk.com/blog/wp-content/uploads/2021/09/Industrial_Robot_Companies_Yaskawa.jpg"
        title="Industrial Robotics"
        desc="Welcome to Industrial Robotics, where automation meets efficiency and precision."
      />
      <div className="w-[90%] lg:w-[80%] my-10 h-fit relative flex flex-col lg:flex-row mx-auto items-center justify-center bg-[#8e8484] rounded-md">
        <div className="w-[90%] lg:w-[45%] lg:py-[5rem] py-[1.5rem] lg:mr-16">
          <h1 className="font-bold  mb-2 lg:mb-5  text-xl md:text-3xl text-[#f6f6f6]">
            Industrial Robotics
          </h1>
          <p className="leading-[2rem] text-[#f6f6f6] text-justify">
            Our mission is to revolutionize manufacturing processes through the integration of cutting-edge robotic solutions. From assembly lines to warehouses, our robotic systems are engineered to enhance productivity, precision, and safety. With a commitment to innovation and reliability, we strive to optimize operational efficiency and empower businesses to thrive in the era of automation. Trust Industrial Robotics for your next automation project and experience the future of manufacturing.
          </p>
        </div>

        <img
          className="w-[90%] lg:w-[35%]  lg:my-[5rem] my-[3rem]"
          style={{ borderRadius: "3%" }}
          src="https://ldi.upenn.edu/wp-content/uploads/2022/03/industrial-robot1350-1024x576.jpg"
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
                Deploy advanced robotic arms equipped with sensors and vision systems for precise and adaptable automation tasks.
              </li>
              <li>
                Implement collaborative robots (cobots) to work alongside human operators, enhancing flexibility and efficiency in manufacturing processes.
              </li>
              <li>
                Integrate intelligent software solutions for robot programming, simulation, and optimization, reducing setup time and improving productivity.
              </li>
              <li>
                Utilize robotic automation for various applications including welding, painting, material handling, and quality inspection, ensuring consistency and quality in production.
              </li>
              <li>
                Enhance workplace safety by automating hazardous or repetitive tasks, minimizing the risk of accidents and injuries for workers.
              </li>
              <li>
                Leverage data analytics and connectivity features to monitor and optimize robotic operations in real-time, maximizing uptime and performance.
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
                Consultation and assessment services to identify automation opportunities and develop customized robotic solutions tailored to your specific needs.
              </li>
              <li>
                Design and integration services to seamlessly incorporate robotic systems into your existing manufacturing infrastructure, optimizing workflow and efficiency.
              </li>
              <li>
                Training programs for operators and maintenance personnel to ensure proficient operation and upkeep of robotic equipment, maximizing uptime and longevity.
              </li>
              <li>
                Technical support and maintenance services to address any issues or concerns promptly, minimizing downtime and disruption to production.
              </li>
              <li>
                Continuous innovation and upgrades to keep pace with evolving technology and industry trends, ensuring your robotic systems remain competitive and future-proof.
              </li>
              <li>
                Collaboration with industry partners and suppliers to deliver comprehensive solutions that meet the diverse needs of modern manufacturing environments.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}

export default IndustrialRobotics
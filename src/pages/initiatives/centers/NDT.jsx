import React from 'react'
import { Helmet } from 'react-helmet'
import HeroSection from '../../../components/common/Hero/HeroSection'

const NDT = () => {
  return (
    <>
      <Helmet>
        <title>NDT | SIIF</title>
      </Helmet>
      <HeroSection
        image="https://www.andt.co.in/images/blogs/what-is-ndt-blog-image-20200518000548-1_crop.jpg"
        title="Non-Destructive Testing"
        desc="Welcome to Non-Destructive Testing, where quality meets precision without compromising integrity."
      />
      <div className="w-[90%] lg:w-[80%] my-10 h-fit relative flex flex-col lg:flex-row mx-auto items-center justify-center bg-[#8e8484] rounded-md">
        <div className="w-[90%] lg:w-[45%] lg:py-[5rem] py-[1.5rem] lg:mr-16">
          <h1 className="font-bold  mb-2 lg:mb-5  text-xl md:text-3xl text-[#f6f6f6]">
            Non-Destructive Testing
          </h1>
          <p className="leading-[2rem] text-[#f6f6f6] text-justify">
            Our mission is to ensure the integrity and reliability of materials, components, and structures through advanced non-destructive testing techniques. From ultrasonic testing to radiographic inspection, our comprehensive range of NDT services delivers accurate and actionable insights without causing damage or disruption. With a commitment to quality and safety, we empower industries to meet regulatory standards, prevent failures, and optimize asset performance. Trust Non-Destructive Testing for your inspection needs and safeguard the integrity of your operations.
          </p>
        </div>

        <img
          className="w-[90%] lg:w-[35%]  lg:my-[5rem] my-[3rem]"
          style={{ borderRadius: "3%" }}
          src="https://fractory.com/wp-content/uploads/2022/09/Non-Destructive-Testing-NDT.jpg.webp"
          alt=""
        />
      </div>
      <div className="w-[90%]  lg:w-[80%]  flex flex-col lg:flex-row justify-between  py-2 lg:py-5 mt-7 mx-auto text-gray-900 rounded-lg">
        <div className="flex flex-col w-full lg:w-[50%] px-[5%] mx-auto  mb-3 lg:mb-0 ">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            Techniques
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                Ultrasonic Testing (UT): Utilize high-frequency sound waves to detect flaws and discontinuities in materials and components, providing precise defect characterization and sizing.
              </li>
              <li>
                Radiographic Testing (RT): Employ X-rays or gamma rays to penetrate materials and reveal internal defects, ensuring thorough inspection without compromising structural integrity.
              </li>
              <li>
                Magnetic Particle Testing (MPT): Apply magnetic fields and finely divided magnetic particles to detect surface and near-surface flaws in ferromagnetic materials, enhancing defect detection capabilities.
              </li>
              <li>
                Liquid Penetrant Testing (LPT): Utilize capillary action to draw penetrant into surface-breaking defects, revealing flaws that may not be visible to the naked eye, ensuring comprehensive surface inspection.
              </li>
              <li>
                Visual Testing (VT): Conduct visual examinations of materials and components to identify surface defects, corrosion, and other imperfections, complementing other NDT techniques for thorough inspection.
              </li>
              <li>
                Eddy Current Testing (ECT): Generate electromagnetic fields to detect surface and near-surface defects in conductive materials, providing rapid and accurate inspection results without physical contact.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%] mx-auto">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            Applications
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                Structural Integrity Assessment: Ensure the safety and reliability of critical infrastructure such as pipelines, bridges, and pressure vessels through comprehensive NDT inspections.
              </li>
              <li>
                Aerospace Component Testing: Verify the quality and performance of aircraft components and assemblies, detecting defects and anomalies that may compromise flight safety.
              </li>
              <li>
                Manufacturing Quality Control: Validate the integrity of manufactured parts and products, preventing defects and ensuring compliance with industry standards and specifications.
              </li>
              <li>
                Weld Inspection: Evaluate the quality of welds in fabricated structures and components, detecting defects such as cracks, porosity, and incomplete fusion.
              </li>
              <li>
                Automotive Safety Testing: Assess the structural integrity of vehicle components and assemblies, identifying potential hazards and ensuring compliance with safety regulations.
              </li>
              <li>
                Petrochemical Plant Inspection: Monitor the condition of equipment and piping in petrochemical facilities, detecting corrosion, erosion, and other degradation mechanisms to prevent accidents and downtime.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}

export default NDT
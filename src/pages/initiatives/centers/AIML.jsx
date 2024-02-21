import React from "react";
import HeroSection from "../../../components/common/Hero/HeroSection";
import { Helmet } from "react-helmet";

const AIML = () => {
  return (
    <>
      <Helmet>
        <title>AI & ML | SIIF</title>
      </Helmet>
      <HeroSection
        image="https://www.saveetha.ac.in/images/sec/2023/AIML/AIML.jpg"
        title="Artificial Intelligence and Machine Learning Center"
        desc="Welcome to the Artificial Intelligence and Machine Learning Center, where we explore the frontiers of AI and ML technologies."
      />
      <div className="w-[90%] lg:w-[80%] my-10 h-fit relative flex flex-col lg:flex-row mx-auto items-center justify-center bg-[#8e8484] rounded-md">
        <div className="w-[90%] lg:w-[45%] lg:py-[5rem] py-[1.5rem] lg:mr-16">
          <h1 className="font-bold  mb-2 lg:mb-5  text-xl md:text-3xl text-[#f6f6f6]">
            Artificial Intelligence and Machine Learning
          </h1>
          <p className="leading-[2rem] text-[#f6f6f6] text-justify">
            Our mission is to advance the field of Artificial Intelligence and
            Machine Learning through cutting-edge research, innovative projects,
            and comprehensive education programs. We strive to push the
            boundaries of what's possible with AI and ML technologies, enabling
            breakthroughs in various domains and industries.
          </p>
        </div>

        <img
          className="w-[90%] lg:w-[35%]  lg:my-[5rem] my-[3rem]"
          style={{ borderRadius: "3%" }}
          src="https://media.licdn.com/dms/image/D5612AQHjDGhc8cNfJA/article-cover_image-shrink_720_1280/0/1704439037481?e=2147483647&v=beta&t=wSs9ZAGGWfx_9TAfotJLRY87JtMQPhKo7wNAh1-inU0"
          alt="AI and ML Center"
        />
      </div>
      <div className="w-[90%]  lg:w-[80%]  flex flex-col lg:flex-row justify-between  py-2 lg:py-5 mt-7 mx-auto text-gray-900 rounded-lg">
        <div className="flex flex-col w-full lg:w-[50%] px-[5%] mx-auto  mb-3 lg:mb-0 ">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            Services
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                Research and development of state-of-the-art AI and ML
                algorithms and models.
              </li>
              <li>
                Consulting services for businesses looking to integrate AI and
                ML solutions into their operations.
              </li>
              <li>
                Training and workshops to upskill professionals and students in
                AI and ML technologies.
              </li>
              <li>
                Collaboration opportunities with industry partners to tackle
                complex AI and ML challenges.
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
                Research and development of state-of-the-art AI and ML
                algorithms and models.
              </li>
              <li>
                Consulting services for businesses looking to integrate AI and
                ML solutions into their operations.
              </li>
              <li>
                Training and workshops to upskill professionals and students in
                AI and ML technologies.
              </li>
              <li>
                Collaboration opportunities with industry partners to tackle
                complex AI and ML challenges.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIML;

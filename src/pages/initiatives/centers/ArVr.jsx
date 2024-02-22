import React from 'react'
import { Helmet } from 'react-helmet'
import HeroSection from '../../../components/common/Hero/HeroSection'

const ArVr = () => {
  return (
    <>
      <Helmet>
        <title>AR/VR | SIIF</title>
      </Helmet>
      <HeroSection
        image="https://www.crbgroup.com/wp-content/uploads/2021/08/AR-VR-Mobile.jpg"
        title="AR/VR"
        desc="Welcome to AR/VR, where imagination meets reality for immersive experiences and transformative interactions."
      />
      <div className="w-[90%] lg:w-[80%] my-10 h-fit relative flex flex-col lg:flex-row mx-auto items-center justify-center bg-[#8e8484] rounded-md">
        <div className="w-[90%] lg:w-[45%] lg:py-[5rem] py-[1.5rem] lg:mr-16">
          <h1 className="font-bold  mb-2 lg:mb-5  text-xl md:text-3xl text-[#f6f6f6]">
            AR/VR
          </h1>
          <p className="leading-[2rem] text-[#f6f6f6] text-justify">
            Our mission is to push the boundaries of reality through cutting-edge Augmented Reality (AR) and Virtual Reality (VR) technologies. From immersive training simulations to interactive marketing experiences, our AR/VR solutions empower businesses to engage, educate, and entertain audiences in entirely new ways. With a focus on creativity and innovation, we transform concepts into captivating virtual environments and experiences that captivate the senses and inspire action. Trust AR/VR for your next project and step into a world of endless possibilities.
          </p>
        </div>

        <img
          className="w-[90%] lg:w-[35%]  lg:my-[5rem] my-[3rem]"
          style={{ borderRadius: "3%" }}
          src="https://readwrite.com/wp-content/uploads/2019/01/AR-VR-825x500.jpg"
          alt=""
        />
      </div>
      <div className="w-[90%]  lg:w-[80%]  flex flex-col lg:flex-row justify-between  py-2 lg:py-5 mt-7 mx-auto text-gray-900 rounded-lg">
        <div className="flex flex-col w-full lg:w-[50%] px-[5%] mx-auto  mb-3 lg:mb-0 ">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            Augmented Reality (AR)
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                Create interactive AR applications and experiences that overlay digital content onto the physical world, enhancing real-world environments with virtual elements and interactions.
              </li>
              <li>
                Develop AR solutions for training, education, and on-the-job support, enabling hands-on learning experiences and immersive simulations that accelerate skill development and knowledge retention.
              </li>
              <li>
                Implement marker-based and markerless AR tracking technologies to recognize and track objects, surfaces, and environments, enabling precise spatial mapping and interaction in AR applications.
              </li>
              <li>
                Integrate computer vision, machine learning, and sensor fusion techniques to enable object recognition, scene understanding, and gesture-based interaction in AR environments, enhancing user engagement and immersion.
              </li>
              <li>
                Enable cross-platform AR experiences across mobile devices, smart glasses, and AR headsets, ensuring broad accessibility and compatibility with a wide range of hardware platforms and operating systems.
              </li>
              <li>
                Offer consultancy, design, development, and deployment services to guide organizations through the entire AR lifecycle, from concept ideation to application development and deployment, ensuring successful implementation and adoption.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%] mx-auto">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            Virtual Reality (VR)
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                Design immersive VR environments and applications that transport users to virtual worlds, enabling interactive storytelling, exploration, and engagement.
              </li>
              <li>
                Develop VR training simulations and educational experiences for various industries, including healthcare, manufacturing, and aerospace, providing hands-on learning opportunities in safe and controlled virtual environments.
              </li>
              <li>
                Implement room-scale and 360-degree VR experiences with spatial audio and haptic feedback, delivering immersive and sensory-rich interactions that enhance presence and immersion in virtual environments.
              </li>
              <li>
                Utilize VR for product visualization, prototyping, and design review, enabling stakeholders to visualize and interact with virtual prototypes and concepts in realistic and immersive 3D environments.
              </li>
              <li>
                Enable multiplayer and social VR experiences for collaboration, communication, and teamwork in virtual environments, fostering remote collaboration and social interaction among geographically dispersed users.
              </li>
              <li>
                Provide VR hardware integration, software development, and content creation services to support organizations in adopting and leveraging VR technology for various applications, ensuring seamless integration and optimal performance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}

export default ArVr
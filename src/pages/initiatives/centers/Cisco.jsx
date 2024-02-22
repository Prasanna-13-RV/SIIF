import React from 'react'
import { Helmet } from 'react-helmet'
import HeroSection from '../../../components/common/Hero/HeroSection'

const Cisco = () => {
  return (
    <>
      <Helmet>
        <title>Cisco Networking Academy | SIIF</title>
      </Helmet>
      <HeroSection
        image="https://img.freepik.com/free-vector/happy-woman-chatting-with-friends-online_74855-14073.jpg"
        title="Cisco Networking Academy"
        desc="Welcome to Cisco Networking Academy, where knowledge meets opportunity in the world of networking and IT."
      />
      <div className="w-[90%] lg:w-[80%] my-10 h-fit relative flex flex-col lg:flex-row mx-auto items-center justify-center bg-[#8e8484] rounded-md">
        <div className="w-[90%] lg:w-[45%] lg:py-[5rem] py-[1.5rem] lg:mr-16">
          <h1 className="font-bold  mb-2 lg:mb-5  text-xl md:text-3xl text-[#f6f6f6]">
            Cisco Networking Academy
          </h1>
          <p className="leading-[2rem] text-[#f6f6f6] text-justify">
            Our mission is to empower individuals with the knowledge and skills to thrive in the ever-evolving field of networking and information technology. As a Cisco Networking Academy, we offer comprehensive training programs, industry-recognized certifications, and hands-on learning experiences to prepare students for rewarding careers in IT networking, cybersecurity, and beyond. With a focus on practical skills and real-world applications, we equip learners with the expertise to design, build, and manage secure and scalable networks that drive business innovation and transformation. Join Cisco Networking Academy and unlock endless possibilities in the digital era.
          </p>
        </div>

        <img
          className="w-[90%] lg:w-[35%]  lg:my-[5rem] my-[3rem]"
          style={{ borderRadius: "3%" }}
          src="https://media.geeksforgeeks.org/wp-content/uploads/20230406152358/CN-(1).jpg"
          alt=""
        />
      </div>
      <div className="w-[90%]  lg:w-[80%]  flex flex-col lg:flex-row justify-between  py-2 lg:py-5 mt-7 mx-auto text-gray-900 rounded-lg">
        <div className="flex flex-col w-full lg:w-[50%] px-[5%] mx-auto  mb-3 lg:mb-0 ">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            Training Programs
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                Networking Essentials: Learn the fundamentals of networking, including protocols, architectures, and troubleshooting techniques, to establish a solid foundation for further study and specialization.
              </li>
              <li>
                Cybersecurity Fundamentals: Gain essential knowledge and skills in cybersecurity principles, threat detection, and risk mitigation strategies to protect networks, systems, and data from cyber threats and attacks.
              </li>
              <li>
                CCNA Routing and Switching: Prepare for the Cisco Certified Network Associate (CCNA) certification exam with comprehensive training in routing, switching, and network infrastructure technologies, covering both theory and hands-on practice.
              </li>
              <li>
                CCNP Enterprise: Advance your networking career with in-depth training in enterprise networking solutions, including advanced routing and switching, network design, and troubleshooting skills required for the Cisco Certified Network Professional (CCNP) certification.
              </li>
              <li>
                DevNet Associate: Explore the intersection of networking and software development with training in network automation, programmability, and software-defined networking (SDN) concepts, leading to the Cisco Certified DevNet Associate certification.
              </li>
              <li>
                IoT Fundamentals: Discover the fundamentals of the Internet of Things (IoT), including IoT architecture, connectivity, and security considerations, to design and implement IoT solutions for various industries and applications.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%] mx-auto">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            Benefits
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                Industry-Recognized Certifications: Earn globally recognized certifications from Cisco Systems, validating your expertise and enhancing your career prospects in the competitive IT industry.
              </li>
              <li>
                Hands-On Learning: Gain practical experience through hands-on labs, simulations, and real-world projects, applying theoretical concepts to solve practical networking challenges and scenarios.
              </li>
              <li>
                Flexible Learning Options: Choose from a variety of learning formats, including instructor-led classes, self-paced online courses, and blended learning experiences, to accommodate your schedule and learning preferences.
              </li>
              <li>
                Networking Opportunities: Connect with peers, mentors, and industry professionals through networking events, online communities, and career fairs, expanding your professional network and opportunities for collaboration and career advancement.
              </li>
              <li>
                Career Support: Access career resources, job placement assistance, and alumni networks to explore job opportunities, refine your resume, and prepare for interviews, ensuring a smooth transition from education to employment.
              </li>
              <li>
                Lifelong Learning: Join a global community of lifelong learners and continue to expand your knowledge and skills through ongoing professional development opportunities, training updates, and advanced certification programs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}

export default Cisco
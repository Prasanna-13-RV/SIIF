import React from "react";
import { EventSingleCard } from "../../components/events/EventSingleCard";
import { Link } from "react-router-dom";
import HeroSection from "../../components/common/Hero/HeroSection";
import { Helmet } from "react-helmet";
export const Startups = () => {
  const startups = [
    {
      name: "Quazr Ventures Pvt. Ltd.",
      logo: "https://res.cloudinary.com/difpe3hca/image/upload/v1708354535/SIIF/Quartz_bpojgv.jpg",
      desc: "We redefine the future. We think and work on required impossible aspects of riding DNA. We intend to deliver the world class best performance economically sustainable vehicles to eminence driving experience.",
    },
    {
      name: "Aero knotz Drone India Pvt. Ltd.",
      logo: "https://res.cloudinary.com/difpe3hca/image/upload/v1708354520/SIIF/Aero_euund0.jpg",
      desc: "Aero knots is initiated by a group of passionate Aeronautical engineers working in the field for 5 years with an aim to achieve the heights of excellence in research and development in aerospace & aviation industry. Aero Knots is a drone training firm which provides an immersive and interactive drone training workshop experience. Our unique syllabus structure and kits provide students with a hands-on holistic approach. Our mission is to motivate the youth by educating & introducing them into the world of DRONES.",
    },
    {
      name: "IK Digital",
      logo: "https://res.cloudinary.com/difpe3hca/image/upload/v1708354533/SIIF/IkD_gtbspl.jpg",
      desc: "IK Digital , founded in 2018, is a full service branding, digital marketing & ad film agency based in Chennai, India, with excellent team. We're youngsters who are creative, vision, skill, focused, friendly who help organization passionate about achieving prospering results. We offer custom fit solutions based on the need of our clients.",
    },
    {
      name: "Mechimed Technologie",
      logo: "https://res.cloudinary.com/difpe3hca/image/upload/v1708354456/SIIF/MT_eu42ub.jpg",
      desc: "Mechimed Technologies established in 2021, is a healthcare focused company driven by the goal of reducing the cost of medical equiment to make it affordable for everyone.",
    },
    {
      name: "LazyCrew",
      logo: "https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg",
      desc: "LazyCrew's OneBuk is a groundbreaking innovation in education technology, proudly claiming the title of India's very first offline textbook-based tablet. It stands as a beacon of progress, pioneering futuristic approaches to learning. OneBuk's mission is clear: to simplify, democratize, and invigorate the learning experience. It achieves this through its ingenious in-built e-learning platform, which is thoughtfully customized to cater to the unique needs of students. By embracing offline capabilities, it ensures that learning remains accessible even in areas with limited internet connectivity. OneBuk is not just a tablet; it's a transformative tool, making education simple, affordable, and highly interactive for the aspiring minds of India.",
    },
    {
      name: "Harvtech LLP",
      logo: "https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg",
      desc: "HarvTech is an AgriTech Startup focusing on modernization of the Agritech 4.0 Industry by Designing and Manufacturing of a 50 HP SMART ELECTRIC TRACTOR to help farmers to meet the market demand in terms of quantitative and qualitative productivity and also convert all existing traditional Tractors to Electric by custom Electric Kitsets.",
    },
    {
      name: "eDigiM Research Pvt. Ltd.",
      logo: "https://res.cloudinary.com/difpe3hca/image/upload/v1708354552/SIIF/edigital_oeofj2.jpg",
      desc: "*eDigiM Brief Overview* About EdigiM: A group of VLSI technology enthusiasts founded eDigiM Research Private Limited. Technological innovation has accelerated at an unprecedented pace in recent years and so have the disruptions in the sector of silicon engineering – complex IC development, increasing failures, and inadequate facilities for design, development, and testing. At eDigiM, we address these disruptions, helping semiconductor product companies in Semiconductor IC Design, creating and providing comprehensive hardware and software solutions that cater to various industries and business sectors, spanning across multiple domains.",
    },
    {
      name: "ZeQube Technologies Private Limited",
      logo: "https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg",
      desc: "ZeQube is a digital manufacturing offering end-to-end manufacturing support services l driving innovative product development (IPD), implementing SaaS-powered quality control mechanisms to streamline production, and accelerating the adoption of digital manufacturing systems to meet Industry 4.0 standards. Our vision is to accelerate the product development seamlessly with our advanced capabilities through our completely digital delivery and optimisation system.",
    },
  ];
  return (
    <section className="mb-5">
      <Helmet>
        <title>About | Startups</title>
      </Helmet>
      <HeroSection
        title="Startups"
        image="https://img.pikbest.com/wp/202405/3d-surround-startup-themed-rocket-surrounded-by-chairs-on-a-white-background-rendered-in_9856296.jpg!sw800"
        desc="An incredible team that steers the entire unit with expertise and
            great enthusiasm. "
      />

      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center pt-9">
            <h2 className="text-5xl font-semibold">StartUps</h2>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-14 xl:px-16 gap-6 mb-5">
            {startups.map((startup, idx) => (
              <EventSingleCard
                // image={startup.logo}
                title={startup.name}
                description={startup.desc}
              />
            ))}
          </section>
        </div>

        <section className="py-6 bg-gray-400 mt-4">
          <div className="text-white container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
            <div>
              <h1 className="text-2xl font-semibold leading lg:text-left w-3/4 mb-3">
                Ready To Take Your Tech Idea To The Next Level? Apply For The
                SIIF Pre-Incubation Program Today!
              </h1>
              <p>For Inquiries: 89257 45338</p>
              <p>Email : akshitakofficial@gmail.com</p>
            </div>
            <Link to="/apply/technopreneur">
              <button className="px-8 py-3 text-lg font-semibold rounded bg-purple-600 w-fit">
                Apply Now
              </button>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

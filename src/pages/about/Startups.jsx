import React from "react";
import { EventSingleCard } from "../../components/events/EventSingleCard";
import { Link } from "react-router-dom";
import HeroSection from "../../components/common/Hero/HeroSection";
import { Helmet } from "react-helmet";
export const Startups = () => {
  const startups = [
    {
      name: "Quazr Ventures Pvt. Ltd.",
      logo: "https://img.freepik.com/premium-vector/startup-success-arrow-cursor-up-right-direction-overlap-overlapping-colorful-vector-logo-design_216988-1189.jpg",
      desc: "",
    },
    {
      name: "Aero knotz Drone India Pvt. Ltd.",
      logo: "https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg",
      desc: "",
    },
    {
      name: "Mechimed Technologie",
      logo: "https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg",
      desc: "",
    },
    {
      name: "eDigiM Research Pvt. Ltd.",
      logo: "https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg",
      desc: "",
    },
    {
      name: "IK Digital",
      logo: "https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg",
      desc: "",
    },
    {
      name: "Harvtech LLP",
      logo: "https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg",
      desc: "",
    },
    {
      name: "ZeQube Technologies Private Limited",
      logo: "https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg",
      desc: "",
    },
    {
      name: "LazyCrew",
      logo: "https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg",
      desc: "",
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

import React from "react";

import { PiStrategy } from "react-icons/pi";
import { Link } from "react-router-dom";

export const IncubationCollaboration = () => {
  const collaborate = [
    {
      title: "Strategic Partnerships",
      description: [
        "Forge strategic partnerships with leading industries.",
        "Access a network of established businesses for mentorship and collaboration.",
        "Explore mutually beneficial opportunities for innovation and growth.",
      ],
      image: <PiStrategy />,
    },
    {
      title: "Joint Research Initiatives",
      description: [
        "Engage in impactful research projects that address real-world challenges.",
        "Collaborate with industry experts to bring research findings to practical applications.",
        "Accelerate technology development through collaborative research efforts.",
      ],
    },
    {
      title: "Technology Transfer",
      description: [
        "Facilitate the seamless transfer of cutting-edge technologies.",
        "Connect with innovators and entrepreneurs working on transformative technologies.",
        "Explore licensing and commercialization opportunities for breakthrough inventions.",
      ],
    },
    {
      title: "Collaborative Events",
      description: [
        "Participate in workshops, seminars, and networking events.",
        "Foster dialogue between academia and industry leaders.",
        "Stay updated on industry trends and advancements.",
      ],
    },
    {
      title: "Innovation Hub",
      description: [
        "Access state-of-the-art facilities and resources for innovation.",
        "Collaborate with cross-disciplinary teams to spark creative solutions.",
        "Participate in innovation challenges and hackathons.",
      ],
    },
    {
      title: "Entrepreneurial Support",
      description: [
        "Receive guidance from experienced mentors in the entrepreneurial journey.",
        "Access funding opportunities and venture capital networks.",
        "Participate in pitch events and showcase your startup to potential investors.",
      ],
    },
  ];
  const facilitate = [
    {
      title: "Collaboration Hub",
      description: [
        "Explore our physical and virtual collaboration spaces designed",
        "Access meeting rooms, collaborative workspaces, and cutting-edge facilities.",
      ],
    },
    {
      title: "Dedicated Support",
      description: [
        "Benefit from a dedicated team to guide you through the collaboration process.",
        "Receive assistance in forming partnerships, navigating collaborations, and optimizing outcomes.",
      ],
    },
    {
      title: "Success Stories",
      description: [
        "Read success stories of impactful collaborations that have led to breakthrough innovations.",
        "to facilitate interactions between academia and industry professionals.",
      ],
    },
  ];

  return (
    <>
      <section className="w-full h-full flex relative justify-center items-center p-3 ">
        <div className="container">
          <div className="row">
            <div className=" text-3xl pt-5">
              Welcome to Zero to Billion, where innovation meets industry!
            </div>
            <div className="col-md-12 text-left pt-7">
              <h2 className="text-4xl font-bold">Our Vision</h2>
              <p className="section-subtitle text-xl py-4 leading-8">
                At Zero to Billion, we envision a collaborative future where
                academic institutions and industries seamlessly work together to
                drive innovation, research, and economic growth.By seamlessly
                integrating cutting-edge research with practical industry
                applications, we aim to shape a future where transformative
                ideas become catalysts for sustainable development. Together, we
                envision a collaborative landscape that not only adapts to
                emerging challenges but actively pioneers solutions, laying the
                foundation for a resilient and forward-thinking society.{" "}
              </p>
            </div>
            <div className="col-md-12 text-left pt-7">
              <h2 className="text-4xl font-bold">Why Collaborate with Us?</h2>
              <div class="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 px-10 lg:px-14 xl:px-16">
                {collaborate.map((coll, idx) => (
                  <div class="p-8 " key={idx}>
                    <div className="bg-[#f7f7f7] p-4 rounded-md">
                      <h2 class="uppercase mt-6 text-2xl text-center text-indigo-500 font-bold mb-2">
                        {coll.title}
                      </h2>

                      <ul className="list-disc pl-6  mt-3">
                        <li>{coll.description[0]}</li>
                        <li>{coll.description[1]}</li>
                        <li>{coll.description[2]}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-12 text-left pt-7">
              <h2 className="text-4xl font-bold">
                How We Facilitate Collaboration
              </h2>
              <div class="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 px-10 lg:px-14 xl:px-16">
                {facilitate.map((coll, idx) => (
                  <div class="p-8" key={idx}>
                  <div className="bg-[#f7f7f7] p-4 rounded-md">
                    <h2 class="uppercase mt-6 text-2xl text-center text-indigo-500 font-bold mb-2">
                      {coll.title}
                    </h2>

                    <ul className="list-disc pl-6  mt-3">
                      <li>{coll.description[0]}</li>
                      <li>{coll.description[1]}</li>
                    </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-12 text-center p-5">
              <button className=" bg-indigo-600 p-3 px-5 rounded-lg lg:text-3xl text-xl md:text-2xl font-semibold ">
                <Link to="#" className="no-underline text-white ">
                  Get Started on Your Collaborative Journey
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
// Get Started on Your Collaborative Journey

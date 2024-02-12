import React from "react";
import { EventSingleCard } from "../../components/events/EventSingleCard";
import { Link } from "react-router-dom";
import HeroSection from "../../components/common/Hero/HeroSection";

export const Startups = () => {
  const startups = [
    {
      name: "Startup 1",
      logo: "https://img.freepik.com/premium-vector/startup-success-arrow-cursor-up-right-direction-overlap-overlapping-colorful-vector-logo-design_216988-1189.jpg",
      desc: "Doloremque nam inventore voluptatum, quaerat amet tempore impedit minima exercitationem ut, labore nobis obcaecati. Suscipit natus vero quod recusandae voluptates ea obcaecati?",
    },
    {
      name: "Startup 1",
      logo: "https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg",
      desc: " Doloremque nam inventore voluptatum, quaerat amet tempore impedit minima exercitationem ut, labore nobis obcaecati. Suscipit natus vero quod recusandae voluptates ea obcaecati?",
    },
    {
      name: "Startup 1",
      logo: "https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg",
      desc: "Doloremque nam inventore voluptatum, quaerat amet tempore impedit minima exercitationem ut, labore nobis obcaecati. Suscipit natus vero quod recusandae voluptates ea obcaecati?",
    },
    {
      name: "Startup 1",
      logo: "https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg",
      desc: "Doloremque nam inventore voluptatum, quaerat amet tempore impedit minima exercitationem ut, labore nobis obcaecati. Suscipit natus vero quod recusandae voluptates ea obcaecati?",
    },
    {
      name: "Startup 1",
      logo: "https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg",
      desc: "Doloremque nam inventore voluptatum, quaerat amet tempore impedit minima exercitationem ut, labore nobis obcaecati. Suscipit natus vero quod recusandae voluptates ea obcaecati?",
    },
  ];
  return (
    <section className="mb-5">
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
                image={startup.logo}
                title={startup.name}
                description={startup.desc}
              />
            ))}
          </section>
        </div>

        <div className="col-md-12 text-center">
          <h1 className="lg:text-6xl text-5xl md:text-5xl font-semibold pb-4">
            Join Our StartUp Team
          </h1>
          <button className="bg-gray-500 p-3 rounded-xl hover:bg-black">
            <Link
              className="lg:text-2xl text-xl md:text-2xl  font-medium text-white"
              to="#"
            >
              Click Here
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

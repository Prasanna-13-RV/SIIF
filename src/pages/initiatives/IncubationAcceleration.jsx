import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";

export const IncubationAcceleration = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  const applyContent = [
    {
      title: "Apply for incubation or acceleration programs",
      url: "/apply/technopreneur",
    },
    {
      title: "Explore partnership opportunities for collaborative initiatives.",
      url: "/about/partners",
    },
    {
      title: "Attend upcoming events, workshops, and networking sessions.",
      url: "/events/upcomingevents",
    },
  ];
  const keywords = [
    {
      overview:
        "Dive into our incubation support, where we nurture and cultivate innovative ideas.",
      services: [
        "Access to co-working spaces.",
        "Mentorship programs with seasoned industry experts.",
        "Workshops and training sessions on entrepreneurial skills.",
      ],
    },
    {
      overview:
        "Accelerate your venture's growth with our tailored acceleration programs.",
      services: [
        "Structured accelerator programs with a focus on scalability.",
        "Funding opportunities and investor connections.",
        "Networking events for collaboration and exposure.",
      ],
    },
    {
      overview: "Explore the resources we offer to equip startups for success.",
      services: [
        "State-of-the-art facilities and laboratories.",
        "Access to research and development support.",
        "Technology transfer and licensing assistance.",
        "Professional networking opportunities.",
      ],
    },
  ];
  return (
    <>
      <section className="w-full h-full flex relative justify-center items-center ">
        <div className="container">
          <div className="row">
            <div className=" text-3xl">
              Welcome to Zero to Billion, where innovation meets industry!
            </div>
            <div className="col-md-12 text-left pt-7">
              <h2 className="text-4xl font-bold">Our Vision</h2>
              <p className="section-subtitle text-xl py-4 leading-8">
                Our Incubation Acceleration program is designed to empower
                entrepreneurs and innovators at every stage of their journey.
                From ideation to market entry, we provide the resources,
                guidance, and community needed to turn ideas into successful
                enterprises.{" "}
              </p>
            </div>
            <div className="col-md-12 text-left pt-7">
              <h2 className="text-4xl font-bold">Key Components</h2>
              <Row xs={1} md={2} lg={3} className="g-4 md:g-6 lg:g-8">
                {keywords.map((coll, idx) => (
                  <Col key={idx}>
                    <Card>
                      <Card.Body>
                        <ReactCardFlip
                          isFlipped={isFlipped}
                          flipDirection="vertical"
                        >
                          <div className="flex flex-col relative justify-center items-center">
                            <p className="pb-2 text-black ">{coll.overview}</p>
                            <button
                              onClick={handleClick}
                              className="bg-black text-white p-2 rounded-lg"
                            >
                              Touch Me
                            </button>
                          </div>

                          <div className="flex flex-col relative justify-start items-center">
                            <li>{coll.services[0]}</li>
                            <li>{coll.services[1]}</li>
                            <li className="pb-3">{coll.services[2]}</li>

                            <button
                              onClick={handleClick}
                              className="bg-black text-white p-2 rounded-lg"
                            >
                              Touch Me
                            </button>
                          </div>
                        </ReactCardFlip>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="col-md-12 text-left pt-7">
              <h2 className="text-4xl font-bold">How to Get Involved</h2>
              <p className="section-subtitle text-xl py-4 leading-8">
                Ready to join the innovation wave? Here's how you can engage
                with our Incubation Acceleration program.{" "}
              </p>
              <div className="px-3 ">
                {applyContent.map((coll, idx) => (
                  <Link to={coll.url} className="no-underline">
                    <li className="pb-2 text-xl text-black ">{coll.title}</li>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-md-12 text-center pt-5">
              <button className=" bg-indigo-600 p-3 px-5 rounded-lg lg:text-3xl text-2xl md:text-3xl font-semibold ">
                <a href="#" className="no-underline text-white ">
                  Join us in shaping the future of innovation!
                </a>
              </button>
              <p className="section-subtitle text-center text-xl py-4 leading-8">
                Whether you're a budding entrepreneur, an established startup,
                or a potential collaborator, Zero to Billion is the catalyst for
                your success. Explore the endless possibilities on our
                Incubation Acceleration page and embark on a journey of
                innovation and growth.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

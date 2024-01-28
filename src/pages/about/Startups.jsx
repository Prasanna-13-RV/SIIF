import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import StartupCard from "../../components/About.jsx/StartupCard";

export const Startups = () => {
  const startups = [
    {
      name: "Startup 1",
      logo: "https://i.pinimg.com/originals/32/ce/5a/32ce5ae0555afc83f66cbc13e52e68c9.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nam inventore voluptatum, quaerat amet tempore impedit minima exercitationem ut, labore nobis obcaecati. Suscipit natus vero quod recusandae voluptates ea obcaecati?",
    },
    {
      name: "Startup 1",
      logo: "https://i.pinimg.com/originals/32/ce/5a/32ce5ae0555afc83f66cbc13e52e68c9.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nam inventore voluptatum, quaerat amet tempore impedit minima exercitationem ut, labore nobis obcaecati. Suscipit natus vero quod recusandae voluptates ea obcaecati?",
    },
    {
      name: "Startup 1",
      logo: "https://i.pinimg.com/originals/32/ce/5a/32ce5ae0555afc83f66cbc13e52e68c9.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nam inventore voluptatum, quaerat amet tempore impedit minima exercitationem ut, labore nobis obcaecati. Suscipit natus vero quod recusandae voluptates ea obcaecati?",
    },
    {
      name: "Startup 1",
      logo: "https://i.pinimg.com/originals/32/ce/5a/32ce5ae0555afc83f66cbc13e52e68c9.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nam inventore voluptatum, quaerat amet tempore impedit minima exercitationem ut, labore nobis obcaecati. Suscipit natus vero quod recusandae voluptates ea obcaecati?",
    },
    {
      name: "Startup 1",
      logo: "https://i.pinimg.com/originals/32/ce/5a/32ce5ae0555afc83f66cbc13e52e68c9.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nam inventore voluptatum, quaerat amet tempore impedit minima exercitationem ut, labore nobis obcaecati. Suscipit natus vero quod recusandae voluptates ea obcaecati?",
    },
  ];
  return (
    <section className="mb-5">
      <img
        className="w-screen h-[80vh]"
        src="https://img.freepik.com/premium-photo/startup-concept-with-icon-business-plan-working-virtual-interface-from-digital-tablet-man-write-tablet-closeup-man-use-pen-with-tablet_47274-130.jpg?w=1060"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center pt-9">
            <h2 className="text-5xl font-semibold">StartUps</h2>
          </div>

          <Row xs={1} md={2} lg={3} className="g-9 pt-[3%] ">
            {startups.map((startup, idx) => (
              <Col key={idx} className="mb-4">
                <StartupCard startup={startup} idx={idx} />
              </Col>
            ))}
          </Row>
        </div>
		<div className="row">
          <div className="col-md-12 text-center pt-9">
            <h2 className="text-5xl font-semibold">StartUps</h2>
          </div>

          <Row xs={1} md={2} lg={3} className="g-9 pt-[3%] ">
            {startups.map((startup, idx) => (
              <Col key={idx} className="mb-4">
                <StartupCard startup={startup} idx={idx} />
              </Col>
            ))}
          </Row>
        </div>
		<div className="row">
          <div className="col-md-12 text-center pt-9">
            <h2 className="text-5xl font-semibold">StartUps</h2>
          </div>

          <Row xs={1} md={2} lg={3} className="g-9 py-[3%] ">
            {startups.map((startup, idx) => (
              <Col key={idx} className="mb-4">
                <StartupCard startup={startup} idx={idx} />
              </Col>
            ))}
          </Row>
        </div>
		<div className="col-md-12 text-center">
            <h2 className="lg:text-6xl text-5xl md:text-5xl font-semibold ">Join Our StartUp Team</h2>
          </div>
      </div>
	  
    </section>
  );
};

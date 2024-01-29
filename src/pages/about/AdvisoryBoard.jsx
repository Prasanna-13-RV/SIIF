import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


export const AdvisoryBoard = () => {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majo`;
  const advisors = [
    {
      name: "John Doe",
      title: "CEO, ABC Inc.",
      url:"https://linkedin.com/",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "Jane Smith",
      title: "CTO, XYZ Corp.",
      url:"https://linkedin.com/",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "John Doe",
      title: "CEO, ABC Inc.",
      url:"https://linkedin.com/",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "Jane Smith",
      title: "CTO, XYZ Corp.",
      url:"https://linkedin.com/",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "John Doe",
      title: "CEO, ABC Inc.",
      url:"https://linkedin.com/",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "Jane Smith",
      title: "CTO, XYZ Corp.",
      url:"https://linkedin.com/",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
  ];
  return (
    <section className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center pt-7">
            <h2 className="text-4xl font-semibold">The Advisors Behind SIIF</h2>
            <p className="section-subtitle">{message}</p>
          </div>

          <Row xs={1} md={2} lg={3} className="g-6 p-[2%]">
            {advisors.map((advisor, idx) => (
              <Col
                className="p-6 transition duration-300 transform hover:scale-105"
                key={idx}
              >
                <Card className="group hover:border-neutral-400 hover:shadow-md">
                  <Card.Img variant="top" src={advisor.image} />
                  <Card.Body className="flex flex-col relative justify-center items-center">
                    <Card.Title>{advisor.name}</Card.Title>
                    <Card.Text className="text-black">{advisor.title}</Card.Text>
             
                    <Link to={advisor.url}><FaLinkedin className="w-10 h-10 "/></Link>
                  
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";


export const Mentors = () => {

  const Mentors = [
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg",
      linkedin: "https://www.linkedin.com",
    },
  ];
  return (
    <>
      <section className="bg-[#f7f7f7]">
        <div className="container pt-5">
          <div className="row ">
            <div className="col-md-12 text-left pt-9">
              <h2 className="text-5xl font-semibold pb-5 text-left">
                {" "}
                Our Mentors
              </h2>
            </div>
            <div className="grid ">
              {Mentors.map((mentor, index) => (
                <div
                  key={index}
				  className="transition duration-300 transform hover:scale-105 hover:border-stone-600 hover:shadow-md"
                >
                  <img src={mentor.image} alt="" />
                  <Card.Body className="flex flex-col relative justify-center items-center">
                    <Card.Title>{mentor.name}</Card.Title>
                    <Card.Text className="text-black">{mentor.title}</Card.Text>
                  </Card.Body>
                  
                    <Link to={mentor.linkedin}>
                      <FaLinkedin className="w-8 h-8" />
                    </Link>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

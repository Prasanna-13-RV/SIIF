import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  background-image: url(${(props) => props.image});
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroSection = ({ title, desc, image }) => {
  return (
    <Section image={image}>
      <div className="absolute inset-0 bg-gradient"></div>

      <div className="container mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-left">
            {title}
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-left">{desc}</p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
            <button className="py-3 px-4  bg-black hover:bg">
              <Link className="font-medium text-white" to="#">
                Get Started
              </Link>
            </button>
            <button className="py-3 px-4  bg-gray-500">
              <Link className="font-medium text-black font-semibold" to="#">
                Learn More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;

import React from "react";
import TeamSlider from "../../components/About.jsx/TeamSlider";

export const Teams = () => {
  const Teammembers = [
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
    }
  ];
  return (
    <>
      <section className="bg-white">
        <img
          className="w-screen h-[60vh] sm:h-[80vh]"
          src="https://t4.ftcdn.net/jpg/03/54/00/91/240_F_354009182_Cc6DzlgU402u1bXAGyvXAbmp5EgYAV9D.jpg"
          alt=""
        />
        <div className="container pt-5">
          <div className="row ">
              <TeamSlider Teammembers={Teammembers} />
          </div>
        </div>
      </section>
    </>
  );
};

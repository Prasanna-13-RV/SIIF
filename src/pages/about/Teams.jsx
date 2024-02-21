import React from "react";
import TeamSlider from "../../components/About/TeamSlider";
import HeroSection from "../../components/common/Hero/HeroSection";
import { Helmet } from "react-helmet";
export const Teams = () => {
  const Teammembers = [
    {
      name: "Mr. Mohamed Sathak",
      title1: "Campus Director,",
      organization1: "MSAJCE",
      title2: "Board of Director, Founder,",
      organization2: "SIIF",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg",
      linkedin: "",
    },
    {
      name: "Janab. P.R.L. Hamid Ibrahim",
      title1: "Executive Director,",
      organization1: "Mohamed Sathak Trust",
      title2: "Board of Director,",
      organization2: "SIIF",
      image:
        "https://res.cloudinary.com/difpe3hca/image/upload/c_pad,w_816,h_742/v1708354437/SIIF/Janab_ED_nxsmqg.jpg",
      linkedin: "",
    },
    {
      name: "Mr. Prakadesh Subramanian",
      title1: "Founder,",
      organization1: "Zero2Billion",
      title2: "Strategic Partner,",
      organization2: "SIIF",
      image:
        "https://res.cloudinary.com/difpe3hca/image/upload/c_pad,w_816,h_742/v1708354451/SIIF/pragadeesh_g132gc.jpg",
      linkedin: "https://www.linkedin.com/in/prakadesh-subramanian-37475b48",
    },
    {
      name: "Miss. Akshita K",
      title1: "Incubation Lead,",
      organization1: "SIIF",
      title2: "",
      organization2: "",
      image:
        "https://res.cloudinary.com/difpe3hca/image/upload/c_pad,w_816,h_742/v1708354447/SIIF/akshitha_dmbxya.jpg",
      linkedin: "https://www.linkedin.com/in/akshita-kancharla-aa9766187/",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About | Teams</title>
      </Helmet>
      <section className="bg-white">
        <HeroSection
          title="Meet Our Team"
          image="https://t4.ftcdn.net/jpg/03/54/00/91/240_F_354009182_Cc6DzlgU402u1bXAGyvXAbmp5EgYAV9D.jpg"
          desc="An incredible team that steers the entire unit with expertise and
            great enthusiasm. "
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

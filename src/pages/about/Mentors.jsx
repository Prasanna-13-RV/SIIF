import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


export const Mentors = () => {
  const Mentors = [
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "John Doe",
      title: "CEO & Founder",
      image:
        "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg",
      linkedin: "https://www.linkedin.com",
    },
  ];
  return (
    <>
      <section className="bg-[#f7f7f7]">
        <div className="container pt-5">
          <div className="row ">
            <div className="col-md-12 text-left pt-9">
              <h2 className="text-5xl font-semibold pb-5 text-center">
                {" "}
                Our Mentors
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 px-10 lg:px-14 xl:px-16 gap-6 mb-5">
              {Mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="transition duration-300 transform hover:scale-105 hover:border-stone-600 hover:shadow-md "
                >
                  <img src={mentor.image} alt="" />
                  <h2 class="uppercase mt-6 text-xl text-center text-indigo-500 font-bold mb-2">
                    {mentor.name}
                  </h2>
                  <p class="font-light text-base text-center text-black mb-2">
                    {mentor.title}
                  </p>

                  <Link to={mentor.linkedin} className="flex relative items-center justify-center">
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

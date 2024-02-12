import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"; // Import Swiper CSS
import Swiper from "swiper";
import "./Slider.css";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamSlider = ({ Teammembers }) => {
  useEffect(() => {
    const swiper = new Swiper(".team-swiper", {
      navigation: {
        nextEl: ".swiper-button-nexts",
        prevEl: ".swiper-button-prevs",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        250: {
          slidesPerView: 1.2,
          spaceBetween: 80,
        },
        300: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2.1,
          spaceBetween: 40,
        },
        900: {
          slidesPerView: 3.3,
          spaceBetween: 40,
        },
        1150: {
          slidesPerView: 4.3,
          spaceBetween: 40,
        },
      },
    });
    window.addEventListener("resize", () => {
      swiper.update();
    });
  }, []);
  return (
    <div className="responsive-container-block outer-container">
      <div className="responsive-container-block ">
        <div className="flex flex-col">
          <p className="text-blk heading-text mb-0">Core team</p>
          <p className="text-blk font-normal">
            An incredible team that steers the entire unit with expertise and
            great enthusiasm. Team spirit with work efficiency is the strength
            that leads to achieving the goals.
          </p>
        </div>
        <div className="responsive-container-block card-container">
          <div className="btn flex ">
            <div className="swiper-button-nexts">
              <img
                className="arrow-right"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg"
                alt="Next"
              />
            </div>
            <div className="swiper-button-prevs">
              <img
                className="arrow-left"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg"
                alt="Previous"
              />
            </div>
          </div>
          <div className="swiper-container team-swiper">
            <div className="swiper-wrapper">
              {Teammembers.map((Teammember) => (
                <div className="swiper-slide">
                  <div className="pb-3 bg-gray-100 rounded-xl">
                    <img className="team-member-image rounded-t-xl" src={Teammember.image} />
                    <p className="text-black name pt-2 text-center ">
                      {Teammember.name}
                    </p>
                    <p className="text-black position text-center">
                      {Teammember.title}
                    </p>

                    <Link
                      to={Teammember.linkedin}
                      className="flex relative items-center justify-center"
                    >
                      <FaLinkedin className="w-8 h-8" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;

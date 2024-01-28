import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"; // Import Swiper CSS
import Swiper from "swiper";
import "./Slider.css";

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
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1150: {
          slidesPerView: 4,
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
          <div className="btn">
            <div className=" swiper-button-nexts">
              <img
                className="arrow-right"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg"
              />
            </div>
            <div className=" swiper-button-prevs">
              <img
                className="arrow-left"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg"
              />
            </div>
          </div>
          <div className="swiper-container team-swiper">
            <div className="swiper-wrapper">
              {Teammembers.map((Teammember) => (
                <div className="swiper-slide">
                  <div className="card">
                    <img className="team-member-image" src={Teammember.image} />
                    <p className="text-blk name">{Teammember.name}</p>
                    <p className="text-blk position">{Teammember.title}</p>
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

import React from "react";
import { Helmet } from "react-helmet";

import HeroSection from "../../../components/common/Hero/HeroSection";

export const MobilityTransportation = () => {
  return (
    <>
      <Helmet>
        <title>Mobility Transportation | SIIF</title>
      </Helmet>
      <HeroSection
        image="https://blog.xoxoday.com/content/images/2022/01/Your-Complete-Guide-to-Maximizing-Conversions-from-On-Ground-Events.jpg"
        title="Mobility Transportation"
        desc="Welcome to Mobility Transportation, where we redefine convenience
            and accessibility in travel. "
      />
      <div className="w-[90%] lg:w-[80%] my-10 h-fit relative flex flex-col lg:flex-row mx-auto items-center justify-center bg-[#8e8484] rounded-md">
        <div className="w-[90%] lg:w-[45%] lg:py-[5rem] py-[1.5rem] lg:mr-16">
          <h1 className="font-bold  mb-2 lg:mb-5  text-xl md:text-3xl text-[#f6f6f6]">
            Mobility Transportation
          </h1>
          <p className="leading-[2rem] text-[#f6f6f6] text-justify">
            Our mission is to provide seamless and reliable transportation
            solutions for all your needs. Whether it's a ride across town or an
            airport transfer, our fleet of vehicles and dedicated drivers ensure
            you reach your destination safely and comfortably. With a commitment
            to excellence and customer satisfaction, we strive to make every
            journey with us a pleasant experience. Trust Mobility Transportation
            for your next ride and let us elevate your travel experience.
          </p>
        </div>

        <img
          className="w-[90%] lg:w-[35%]  lg:my-[5rem] my-[3rem]"
          style={{ borderRadius: "3%" }}
          src="https://www.thedigitalspeaker.com/content/images/2023/10/Futureo-of-Mobility-Keynote-Speaker.jpg"
          alt=""
        />
      </div>
      <div className="w-[90%]  lg:w-[80%]  flex flex-col lg:flex-row justify-between  py-2 lg:py-5 mt-7 mx-auto text-gray-900 rounded-lg">
        <div className="flex flex-col w-full lg:w-[50%] px-[5%] mx-auto  mb-3 lg:mb-0 ">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            Facilities
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                Enjoy a comfortable journey in our well-maintained vehicles
                equipped with amenities like Wi-Fi and charging ports.
              </li>
              <li>
                Enjoy complimentary amenities such as bottled water, Wi-Fi, and
                charging ports during your ride.
              </li>
              <li>
                Our vehicles are equipped with state-of-the-art safety features,
                including GPS tracking and airbag systems.
              </li>
              <li>
                Our services are available round the clock, providing reliable
                transportation at any time of the day or night.
              </li>
              <li>
                We offer flexible payment options, including cash, credit/debit
                cards, and digital wallets, making transactions convenient for
                our passengers.
              </li>
              <li>
                Our dedicated customer support team is available to assist you
                with any inquiries, reservations, or concerns.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%] mx-auto">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            Offerings
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            <ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
              <li>
                Tailored services to suit your specific needs and preferences,
                whether it's a one-time ride or ongoing transportation
                requirements.
              </li>
              <li>
                Timely pickups and drop-offs to major airports, ensuring you
                reach your destination on time and hassle-free.
              </li>
              <li>
                Highly trained and courteous drivers committed to providing
                safe, punctual, and comfortable journeys for all passengers.
              </li>
              <li>
                Specialized services for corporate clients, including executive
                transportation for business meetings, conferences, and events.
              </li>
              <li>
                Transportation solutions for special occasions such as weddings,
                proms, and celebrations, ensuring a memorable and stress-free
                experience.
              </li>
              <li>
                Vehicles equipped to accommodate passengers with disabilities,
                ensuring inclusivity and accessibility for all travelers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

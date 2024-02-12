import React from "react";
import { PreviousEventCards } from "../../components/events/previousEvents/PreviousEventCards";
import HeroSection from "../../components/common/Hero/HeroSection";
export const PreviousEvents = () => {
  return (
    <>
      <HeroSection
        image="https://blog.xoxoday.com/content/images/2022/01/Your-Complete-Guide-to-Maximizing-Conversions-from-On-Ground-Events.jpg"
        title="Previous Events"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nesciunt illo tenetur fuga ducimus numquam ea!"
      />
     
      <PreviousEventCards />
    </>
  );
};

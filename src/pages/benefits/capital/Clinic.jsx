import React from "react";
import { ClinicHero } from "../../../components/benefits/captial/clinic/ClinicHero";
import ClinicContent from "../../../components/benefits/captial/clinic/ClinicContent";
import { ClinicTable } from "../../../components/benefits/captial/clinic/ClinicTable";
import { ClinicImages } from "../../../components/benefits/captial/clinic/ClinicImages";
import HeroSection from "../../../components/common/Hero/HeroSection";

function Clinic() {
  return (
    <>
      <HeroSection
        image="https://www.ibrasiagroup.com/wp-content/uploads/2023/07/stock-photo-audience-at-the-conference-hall-business-conference-and-presentation-728227891-transformed-1.jpeg"
        title="Capital Clinic"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nesciunt illo tenetur fuga ducimus numquam ea!"
      />
      <ClinicContent />
      <ClinicTable />
      <ClinicImages />
    </>
  );
}

export default Clinic;

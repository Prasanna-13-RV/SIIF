import React from "react";
import PartnerCard from "../../components/About.jsx/PartnerCard";

export const Partners = () => {
  return (
    <>
      <section className="bg-[#f7f7f7]">
        <div className="container pt-5">
          <div className="row ">
            <div className="col-md-12 text-left pt-9">
              <h2 className="text-5xl font-semibold pb-5">StartUps</h2>
            </div>
			<PartnerCard/>
          </div>
        </div>
      </section>
    </>
  );
};

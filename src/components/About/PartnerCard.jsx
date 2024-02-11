import React from "react";
import "./PartnerCard.css";

const PartnerCard = ({ partner }) => {
  return (
    <div className="grid">
      {partner.map((x, index) => (
        <div key={index}>
          <img src={x.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default PartnerCard;
import React from "react";
import "./PartnerCard.css"
const PartnerCard = ({partners}) => {
  return (
    
      <div class="grid">
      {partners.map((x) => (
      <div>
        <img
          src={x.image}
          alt=""
        />
      </div>
         
    ))}
    </div>
  
   
  );
};

export default PartnerCard;

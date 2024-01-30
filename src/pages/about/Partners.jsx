import React from "react";
import PartnerCard from "../../components/About.jsx/PartnerCard";

export const Partners = () => {
  const partners=[{
    "image":"https://i0.wp.com/www.crazytips.org/wp-content/uploads/2021/02/Logo-Design-professional.jpg?ssl=1"
  },
  {
    "image":"https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
  },{
    "image":"https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
  },{
    "image":"https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
  },{
    "image":"https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
  },{
    "image":"https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
  },{
    "image":"https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
  },{
    "image":"https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
  },{
    "image":"https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
  },{
    "image":"https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
  },{
    "image":"https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
  },{
    "image":"https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
  },{
    "image":"https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
  },{
    "image":"https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
  },
]
  return (
    <>
      <section className="bg-[#f7f7f7]">
        <div className="container pt-5">
          <div className="row ">
            <div className="col-md-12 text-left pt-9">
              <h2 className="text-5xl font-semibold pb-5 text-left"> Our Partners</h2>
            </div>
              <PartnerCard partners={partners}/>
        
          </div>
        </div>
      </section>
    </>
  );
};

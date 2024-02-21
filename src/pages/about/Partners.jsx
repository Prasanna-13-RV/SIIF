import React from "react";
import { Helmet } from "react-helmet"
export const Partners = () => {
  const partners = [
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/020/190/424/non_2x/hdfc-logo-hdfc-icon-free-free-vector.jpg",
    },{
      image:
        "https://presentations.gov.in/wp-content/uploads/2020/06/Startup-India_Preview.png?x93559",
    }
    
  ];
  return (
    <>
    <Helmet>
				<title>About | Partners</title>
			</Helmet>
      <section className="bg-[#f7f7f7]">
        <div className="container pt-5">
          <div className="row ">
            <div className="col-md-12 text-left pt-9">
              <h2 className="text-5xl font-semibold pb-5 text-center">
                {" "}
                Our Partners
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-4  px-10 lg:px-14 xl:px-16 gap-6 mb-5">
              {partners.map((x, index) => (
                <div key={index}>
                  <img src={x.image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

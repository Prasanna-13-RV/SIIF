import React from "react";
import { Helmet } from "react-helmet"
export const Partners = () => {
  const partners = [
    {
      image:
        "https://i0.wp.com/www.crazytips.org/wp-content/uploads/2021/02/Logo-Design-professional.jpg?ssl=1",
    },
    {
      image:
        "https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg",
    },
    {
      image:
        "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706601600&semt=sph",
    },
    {
      image:
        "https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg",
    },
    {
      image:
        "https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg",
    },
    {
      image:
        "https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg",
    },
    {
      image:
        "https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg",
    },
    {
      image:
        "https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg",
    },
    {
      image:
        "https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg",
    },
    {
      image:
        "https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg",
    },
    {
      image:
        "https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg",
    },
    {
      image:
        "https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg",
    },
    {
      image:
        "https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg",
    },
    {
      image:
        "https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg",
    },
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

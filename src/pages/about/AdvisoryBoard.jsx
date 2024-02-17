import React from "react";
import HeroSection from "../../components/common/Hero/HeroSection";

export const AdvisoryBoard = () => {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majo`;
  const advisors = [
    {
      name: "Mr. Mohamed Sathak",
      title: "Board of Director",
      organization: "SIIF, MSAJCE",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
      name: "Janab. P.R.L. Hamid Ibrahim",
      title: "Board of Director",
      organization: "SIIF, MSAJCE",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
      name: "Dr. K.S. Srinivasan",
      title: "Senior Research Faculty Member",
      organization: "SIIF, MSAJCE",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
      name: "Mr. Prakadesh Subramanian",
      title: "Strategic Partner",
      organization: "SIIF, MSAJCE",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    }
  ];

  return (
    <section className="bg-white">
    <HeroSection
        title="Meet Our Advisory Board"
        image="https://t4.ftcdn.net/jpg/03/54/00/91/240_F_354009182_Cc6DzlgU402u1bXAGyvXAbmp5EgYAV9D.jpg"
        desc="An incredible team that steers the entire unit with expertise and
            great enthusiasm. "
       />
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center pt-7">
            <h2 className="text-4xl font-semibold">The Advisors Behind SIIF</h2>
            <p className="section-subtitle">{message}</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 px-10 lg:px-14 xl:px-16">
            {advisors.map((advisor, idx) => (
              <div class="p-8">
                <div class="flex justify-center items-center shadow-2xl">
                  <img src={advisor.image} alt="" />
                </div>
                <h2 class="uppercase mt-6 text-xl text-center text-indigo-500 font-bold mb-2">
                  {advisor.name}
                </h2>
                <p class="font-light text-xl text-center text-black ">
                  {advisor.title}
                </p>
                <p class="font-light text-base text-center text-black mb-3">
                  {advisor.organization}
                </p>
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </section>
  );
};

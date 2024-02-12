import React from "react";

export const AdvisoryBoard = () => {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majo`;
  const advisors = [
    {
      name: "John Doe",
      title: "CEO, ABC Inc.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "Jane Smith",
      title: "CTO, XYZ Corp.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "John Doe",
      title: "CEO, ABC Inc.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "Jane Smith",
      title: "CTO, XYZ Corp.",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "John Doe",
      title: "CEO, ABC Inc.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "Jane Smith",
      title: "CTO, XYZ Corp.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
  ];
  return (
    <section className="bg-white">
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
                <p class="font-light text-base text-center text-black mb-3">
                  {advisor.title}
                </p>
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </section>
  );
};

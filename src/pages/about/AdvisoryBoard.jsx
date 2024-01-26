import React from "react";
import Teamcard from "../../components/About.jsx/Teamcard";


export const AdvisoryBoard = () => {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majo`;
  const advisors = [
    {
      name: "John Doe",
      title: "CEO, ABC Inc.",
      image:"https://img.freepik.com/premium-photo/contemplative-expression-serene-contemplative-gaze_894855-4132.jpg"
    },
    {
      name: "Jane Smith",
      title: "CTO, XYZ Corp.",
      image:"https://img.freepik.com/premium-photo/contemplative-expression-serene-contemplative-gaze_894855-4132.jpg"
    },
    {
      name: "John Doe",
      title: "CEO, ABC Inc.",
      image:"https://img.freepik.com/premium-photo/contemplative-expression-serene-contemplative-gaze_894855-4132.jpg"
    },
    {
      name: "Jane Smith",
      title: "CTO, XYZ Corp.",
      image:"https://img.freepik.com/premium-photo/contemplative-expression-serene-contemplative-gaze_894855-4132.jpg"    },
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
          <div className="col-md-12 text-center">
            <h2 className="section-title">The Advisors Behind SIIF</h2>
            <p className="section-subtitle">{message}</p>
          </div>
          <div class="container m-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {advisors.map((advisor, index) => {
              return <Teamcard advisor={advisor} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

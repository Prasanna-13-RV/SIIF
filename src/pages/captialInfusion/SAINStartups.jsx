import React from "react";
import { Helmet } from 'react-helmet'

export const SAINStartups = () => {
  const data = [
    {
      title: "Supportive Community",
      content:
        "Joining SAIN means becoming part of a supportive community of entrepreneurs who understand the challenges and opportunities of building a Start-Up. Through our events, workshops, and forums, you can connect with peers, share experiences, and gain valuable insights.",
      img: "https://images.livemint.com/img/2022/10/27/1260x709/rupixen-com-5lw6CLBZlCg-unsplash_1639291858917_1666863214393_1666863214393.jpg",
    },

    {
      title: "Access to Capital",
      content:
        "SAIN connect Start-Ups with a network of angel investors actively seeking investment opportunities. By joining SAIN, you gain access to a pool of capital that can help fuel your business growth and take it to the next level.",
      img: "https://images.unsplash.com/photo-1559067096-49ebca3406aa?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Networking Opportunities",
      content:
        "SAIN offer Start-Ups the chance to network with other entrepreneurs, investors, and industry experts. Our networking ecosystem opens doors to potential partnerships, collaborations, and access to a wider network of resources.",

      img: "https://images.unsplash.com/photo-1554260570-e9689a3418b8?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Validation and Credibility",
      content:
        "Being associated with SAIN adds credibility to your Start-Up. Our rigorous selection process ensures that only promising and investable Start-Ups are accepted into our network, providing a seal of approval that can enhance your reputation and attract further investment.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Expert Guidance and Mentorship",
      content:
        "SAIN network not only provides funding but also offers valuable guidance and mentorship from experienced investors and industry professionals. Our insights can help Start-Ups refine their business strategies, navigate challenges, and make informed decisions.",
      img: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="  mx-auto ">
         <Helmet>
        <title>Startups | SIIF</title>
      </Helmet>
      <h1 className="py-16 font-bold text-3xl text-center ">SAIN Startups</h1>
      <div className=" w-[90%]  lg:w-[85%] xl:w-[80%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 grid-flow-dense justify-items-center mx-auto  pb-16">
        {data.map((i) => {
          return (
            <div className="h-[400px] shadow-md  rounded-sm">
              <img
                src={i.img}
                className="h-[40%]  w-full object-cover"
                alt=""
              />
              <div className="p-3">
                <h1 className=" font-bold mb-2">{i.title}</h1>
                <p className="">{i.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

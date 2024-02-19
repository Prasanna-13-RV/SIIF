import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser"
// import axios from "axios"
// import { toast } from "react-toastify"
// import { BASE_URL } from "../../utils/common.util"

const ContactComponent = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState();
  const [click, setclick] = useState(false);
  const [alert, setalert] = useState(false);

  const form = useRef();

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     axios
  //         .post(`https://clever-ox-galoshes.cyclic.app/api/contact`, {
  //             fullname: fullname,
  //             email: email,
  //             message: message,
  //             phone : phone
  //         })
  //         .then((res) => {
  //             console.log(res.data, "res.data");
  //             if (res.data === "Email has been sent") {
  //                 toast.success("Email has been sent", {
  //                     position: "top-right",
  //                     autoClose: 5000,
  //                     hideProgressBar: false,
  //                     closeOnClick: true,
  //                     pauseOnHover: true,
  //                     draggable: true,
  //                     progress: undefined,
  //                 });
  //             } else {
  //                 toast.error("Email has not sent", {
  //                     position: "top-right",
  //                     autoClose: 5000,
  //                     hideProgressBar: false,
  //                     closeOnClick: true,
  //                     pauseOnHover: true,
  //                     draggable: true,
  //                     progress: undefined,
  //                 });
  //             }
  //         });
  // };

  return (
    <section className="text-gray-100  mt-10 ">
      <div className="google-map-code w-[90%] mx-auto lg:w-[80%] mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.12086329995!2d80.2188767!3d12.8354656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a5fd8e7ee73%3A0x1049fe79b9ee1733!2sSATHAK%20INNOVATION%20%26%20INCUBATION%20FOUNDATION!5e0!3m2!1sen!2sin!4v1708245657225!5m2!1sen!2sin"
          width={window.innerWidth}
          height={window.innerHeight - 150}
          style={{
            border: 0,
            width: "100%",
            position: "relative",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="w-[90%]  lg:w-[80%]  flex flex-col lg:flex-row justify-between  py-2 lg:py-5 mt-7 mx-auto text-gray-900 rounded-lg">
        <div className="flex flex-col w-full lg:w-[50%]   mx-auto  mb-3 lg:mb-0 ">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
            We'd Love to Hear From You
          </h2>
          <div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
            We are always listening, and waiting to help you. Write to us to
            collaborate, seek help or tell us your feedbacks and we will reach
            out to you!
          </div>
        </div>
        <form
          onSubmit={() => {
            setalert(true);

            window.location.href = "https://siif.ventures/";
          }}
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdVp5sxiuivy1MqePc1106FkU90oXWUdUidwMrgaKZVu92Bcg/formResponse"
          method="POST"
          target="__blank"
          className="w-full lg:w-[50%] mx-auto"
          ref={form}>
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="rounded-lg outline-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
              type="text"
              placeholder=""
              required
              onChange={(e) => setFullname(e.target.value)}
              name="entry.174024822"
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span>
            <input
              className="rounded-lg outline-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="entry.1328436172"
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Phone Number
            </span>
            <input
              className="rounded-lg outline-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
              required
              minLength={10}
              maxLength={10}
              type="phone"
              onChange={(e) => setPhone(e.target.value)}
              name="entry.1904841294"
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea
              style={{ resize: "none" }}
              className="rounded-lg outline-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 h-32"
              required
              name="entry.134714864"
              onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <div className="mt-8">
            <input
              type="submit"
              value="Send Message"
              className="cursor-pointer uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            />
          </div>
        </form>
      </div>
      {alert && (
        <div
          class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert">
          <span class="font-medium">Congratulations! </span> Your Input Has Been
          Received!
        </div>
      )}
    </section>
  );
};

export default ContactComponent;

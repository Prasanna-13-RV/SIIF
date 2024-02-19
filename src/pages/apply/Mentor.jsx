import {useState} from "react";
import { Helmet } from "react-helmet";

const Mentor = () => {
    const [alert, setalert] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Apply | SIIF</title>
      </Helmet>
      <div className="p-10 w-full bg-gray-900">
      {alert && (
        <div
          class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert">
          <span class="font-medium">Congratulations! </span>  Your Input Has Been Received!
        </div>
      )}
        <h1
          className="text-center font-bold text-3xl
            text-white">
          Mentors
        </h1>
      </div>
      <div className="w-[80%] lg:w-[50%] my-10 mx-auto">
        <h1 className="font-bold text-3xl text-center p-3 leading-10">
          Become a Mentor
        </h1>
        <p>
          {" "}
          Entrepreneurs are people who change the world. Technology has
          democratized entrepreneurship and made it accessible to more people
          than ever before. Our society faces some of the biggest challenges in
          history and we believe that technology and entrepreneurship are
          essential to solve them. SASTRA TBI is all about helping entrepreneurs
          and we do it in many different ways. We run a co-working space, host
          meet-ups and events, and we invest in the startups that we help
          through VC/Angel Investors. In the last few months, we have hosted
          dozens of ‘mentor hours’ meetings between entrepreneurs and people
          from our mentor network. As part of our Startup Manifesto, we are
          expanding the mentor network to give lifeline to SASTRA TBI. Our
          mentor network is the soul of SASTRA TBI. It’s our reason for
          existence and the glue that binds everything together. It makes a huge
          impact on a daily basis and builds life-long friendships and business
          partnerships. SASTRA TBI requests experts from all fields, allied
          sectors on technical side and Business experts on hand-holding side to
          register and be part of our Mentor Network and help first-time
          entrepreneurs get their chance to make a positive impact in the
          universe.
        </p>
      </div>

      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfkVK0lWtR7pzMRHG8lZOi-lTB6SCfPESmGIY660UVbv0ivcg/formResponse"
        method="POST"
        onSubmit={() => {
            setalert(true);
          
            window.location.href ="https://siif.ventures/";
        
        }}
        className="m-16 w-[80%] lg:w-[50%] mx-auto flex flex-wrap justify-between items-start"
        target="__blank"
        onSubmit={() => {
          window.location.href = window.location.pathname;
        }}>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">
            Full Name*
          </label>
          <input
            name="entry.1318104399"
            type="text"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">
            Email Id*
          </label>
          <input
            name="entry.281972853"
            type="email"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">
            Mobile no*
          </label>
          <input
            name="entry.2145606991"
            type="tel"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder=""
            required
          />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">
            Domain*
          </label>

          <input
            name="entry.864111014"
            type="text"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">
            LinkedIn Profile*
          </label>
          <input
            name="entry.1823808210"
            type="text"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>

        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">
            Why are you interested*
          </label>
          <textarea
            name="entry.627162991"
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""></textarea>{" "}
        </div>

        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 "
            for="file_input">
            Upload your CV*
          </label>
          <input
            name="entry.158830016"
            placeholder="Drive link with view access"
            type="text"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]"></div>
        <button
          type="submit"
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Mentor;

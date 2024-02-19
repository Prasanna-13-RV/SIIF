import { useState } from "react";
import { Helmet } from "react-helmet";

const Student = () => {
  const [alert, setalert] = useState(false);
  return (
    <div>
      <Helmet>
        <title>Apply | SIIF</title>
      </Helmet>
      <div className="p-10 w-full bg-gray-900">
        <h1
          className="text-center font-bold text-3xl
        text-white">
          Application form
        </h1>
      </div>
      {alert && (
        <div
          class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert">
          <span class="font-medium">Congratulations! </span>  Your Input Has Been Received!
        </div>
      )}

      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdXQv8axRxcStMFi2tLqJnc_MAdLPAclKYKxawtaM0k1dvAig/formResponse"
        target="__blank"
        onSubmit={() => {
            setalert(true);
          
            window.location.href ="https://siif.ventures/";
        
        }}
        method="POST"
        className="m-16 w-[80%] lg:w-[50%] mx-auto flex flex-wrap justify-between items-start">
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">
            Name of the student*
          </label>
          <input
            type="text"
            name="entry.44949937"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">
            Department and year*
          </label>
          <input
            type="text"
            name="entry.1437997705"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">
            Name of the College*
          </label>
          <input
            type="text "
            name="entry.911081269"
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
            name="entry.490084945"
            type="email"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900">
            Mobile no*
          </label>
          <input
            maxLength={10}
            minLength={10}
            name="entry.1618165648"
            type="tel"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">
            Domain*
          </label>

          <input
            name="entry.115376929"
            type="text"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>

        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">
            Describe your Problem Statement?*
          </label>
          <textarea
            name="entry.355713015"
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""></textarea>{" "}
        </div>

        <div className="mb-3 lg:mb-5 w-[100%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">
            Why You Want To Start a Startup?*
          </label>
          <input
            name="entry.2134334370"
            type="text"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <button
          type="submit"
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
          Apply
        </button>
      </form>
      
    </div>
  );
};

export default Student;

import React from 'react'

const Technopreneur = () => {
  return (
    <div>
      <div className='p-10 w-full bg-gray-900'>
        <h1 className='ml-20 font-bold text-3xl
            text-white'>Application form</h1>
      </div>


      <form className="m-16 w-[80%] lg:w-[50%] mx-auto flex flex-wrap justify-between items-start">
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">

            Name of Startup Founder*</label>
          <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tell us something about yourself and educational background*</label>
          <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current location*
          </label>
          <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Id*
          </label>
          <input type="email" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>


        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile no*
          </label>
          <input type="tel" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">Focus Area*
          </label>
          <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>

        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe your Problem statement*

          </label>
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>  </div>

        <div className="mb-3 lg:mb-5 w-[100%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            How you got the spark to become an Entrepreneur? *
          </label>
          <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div className="mb-3 lg:mb-5 w-[100%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Why you wants to become an Incubatee at FIRST-TBI?*

          </label>
          <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>

        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">

          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">
            Upload your CV*</label>
          <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">

        </div>
        <button type="submit" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

    </div>
  )
}

export default Technopreneur
import React from 'react'

const Faculty = () => {
  return (
    <div>
      <div className='p-10 w-full bg-gray-900'>
        <h1 className='text-center font-bold text-3xl
            text-white'>Application form</h1>
      </div>


      <form className="m-16 w-[80%] lg:w-[50%] mx-auto flex flex-wrap justify-between items-start">
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">

            Name of the faculty*</label>
          <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" required />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">Name of the Institution*</label>
          <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" required />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">Email Id*
          </label>
          <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" required />
        </div>

        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">Mobile no*
          </label>
          <input type="tel" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
        </div>
        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">Area of Interest*(3D Printing,IoT,Drone,Virtual Reality,Robotics
          </label>
          <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
        </div>

        <div className="mb-3 lg:mb-5 w-full lg:w-[45%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">Describe your startup Idea*

          </label>
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder=""></textarea>  </div>

        <div className="mb-3 lg:mb-5 w-[100%]">
          <label className="w-full block mb-2 text-sm font-medium text-gray-900 ">
            Why do you want to join us as an Incubatee?*
          </label>
          <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="" required />
        </div>
        <button type="submit" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
      </form>

    </div>
  )
}

export default Faculty
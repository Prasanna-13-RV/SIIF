import React from 'react'

const Mentor = () => {
    return (
        <div>
            <div className='p-10 w-full bg-gray-900'>
                <h1 className='ml-20 font-bold text-3xl
            text-white'>Mentors</h1>
            </div>
            <div className='w-[50%] my-10 mx-auto'>
                <h1 className='font-bold text-3xl text-center p-3 leading-10'>Become a Mentor</h1>
                <p> Entrepreneurs are people who change the world. Technology has democratized entrepreneurship and made it accessible to more people than ever before. Our society faces some of the biggest challenges in history and we believe that technology and entrepreneurship are essential to solve them.
                    SASTRA TBI is all about helping entrepreneurs and we do it in many different ways. We run a co-working space, host meet-ups and events, and we invest in the startups that we help through VC/Angel Investors. In the last few months, we have hosted dozens of ‘mentor hours’ meetings between entrepreneurs and people from our mentor network. As part of our Startup Manifesto, we are expanding the mentor network to give lifeline to SASTRA TBI.
                    Our mentor network is the soul of SASTRA TBI. It’s our reason for existence and the glue that binds everything together. It makes a huge impact on a daily basis and builds life-long friendships and business partnerships.
                    SASTRA TBI requests experts from all fields, allied sectors on technical side and Business experts on hand-holding side to register and be part of our Mentor Network and help first-time entrepreneurs get their chance to make a positive impact in the universe.</p>
            </div>

            <form className="m-16 w-[50%] mx-auto flex flex-wrap justify-between items-start">
                <div className="mb-5 w-[45%]">
                    <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">

                        Full Name*</label>
                    <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                <div className="mb-5 w-[45%]">
                    <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Id*
                    </label>
                    <input type="email" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                <div className="mb-5 w-[45%]">
                    <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile no*
                    </label>
                    <input type="tel" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                <div className="mb-5 w-[45%]">
                    <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">Domain*
                    </label>

                    <select id="years" size="3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                    </select>  </div>
                <div className="mb-5 w-[45%]">
                    <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">LinkedIn Profile*</label>
                    <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>

                <div className="mb-5 w-[45%]">
                    <label className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">Why are you interested*

                    </label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>  </div>


                <div className="mb-5 w-[45%]">

                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">
                        Upload your CV*</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

                </div>
                <div className="mb-5 w-[45%]">

                </div>
                <button type="submit" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}

export default Mentor
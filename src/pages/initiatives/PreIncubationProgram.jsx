import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"

import HeroSection from '../../components/common/Hero/HeroSection';

const faq = [
  {
    title: "Week 1: Orientation and Idea Validation",
    content: [
      "Day 1: Program Welcome and Introduction",
      "Day 2: Team Formation and Icebreaking",
      "Day 3: Ideation Workshops",
      "Day 4: Pitching Practice",
      "Day 5: Mentorship Sessions",
    ],
  },
  {
    title: "Week 2: Market Research and Customer Validation",
    content: [
      "Day 1: Research Planning",
      "Day 2: Data Collection",
      "Day 3: Analysis and Insights",
      "Day 4: Customer Interviews",
      "Day 5: Validation and Feedback",
    ],
  },
  {
    title: "Week 3: Product Development",
    content: [
      "Day 1: Planning and Design",
      "Day 2: Prototyping",
      "Day 3: Testing and Iteration",
      "Day 4: Refinement",
      "Day 5: Documentation and Handoff",
    ],
  },
  {
    title: "Week 4: Prototype and MVP Development",
    content: [
      "Day 1: Prototyping and MVP Workshop",
      "Day 2: Building Prototypes",
      "Day 3: User Testing and Feedback",
      "Day 4: Pivot and Adaptation",
      "Day 5: Pitch Practice",
    ],
  },
  {
    title: "Week 5: Legal and Compliance",
    content: [
      "Day 1: Intellectual Property Rights",
      "Day 2: Business Structure and Legal Requirements",
      "Day 3: Regulatory Compliance",
      "Day 4: Mentorship on Legal Matters",
      "Day 5: Pitch to Legal Experts",
    ],
  },
  {
    title: "Week 6: Marketing and Customer Acquisition",
    content: [
      "Day 1: Marketing Strategies and Campaign Planning",
      "Day 2: Digital Marketing Techniques",
      "Day 3: Sales and Customer Acquisition",
      "Day 4: Networking Opportunities",
      "Day 5: Pitch and Feedback",
    ],
  },
  {
    title: "Week 7: Financial Planning and Funding",
    content: [
      "Day 1: Financial Management and Budgeting",
      "Day 2: Funding Options and Strategies",
      "Day 3: Investor Relations",
      "Day 4: Pitch to Potential Investors",
      "Day 5: Pitch and Feedback",
    ],
  },
  {
    title: "Week 8: Scaling and Growth Strategies",
    content: [
      "Day 1: Scaling Your Business",
      "Day 2: Expansion Strategies",
      "Day 3: Operations and Logistics",
      "Day 4: Networking Opportunities",
      "Day 5: Pitch and Feedback",
    ],
  },
  {
    title: "Week 9: Conclusion and Graduation",
    content: [
      "Day 1: Program Recap and Achievements",
      "Day 2: Future Plans and Incubation Opportunities",
      "Day 3: Graduation Ceremony and Awards",
      "Day 4: Networking and Celebrations",
      "Day 5: Closing Remarks and Farewell",
    ],
  },
];

export const PreIncubationProgram = () => {
  return (
    <div>
    <Helmet>
        <title>Pre-Incubation Program | SIIF</title>
      </Helmet>
      <HeroSection
        title="Program In Brieforama"
        desc={``}
        image="https://t4.ftcdn.net/jpg/03/54/00/91/240_F_354009182_Cc6DzlgU402u1bXAGyvXAbmp5EgYAV9D.jpg"
      />
      <div className="px-10 lg:px-14 xl:px-16">
        <p class="text-center mt-6 text-xl font-medium 0">
          At "Program In Brieforama," we're committed to making it easy for you
          to explore our programs and find the right opportunities to support
          your entrepreneurial journey. Whether you're a budding startup
          founder, a seasoned entrepreneur, or someone with a passion for
          innovation, there's a program for you. Dive into "Program In
          Brieforama" today and take the first step towards realizing your
          entrepreneurial dreams!
        </p>
      </div>
      <div class="px-10 lg:px-14 xl:px-16">
        <h1 class="text-4xl font-medium text-gray-700 text-center mt-6">
          Sector Spotlight
        </h1>
        <div class="p-8 grid grid-cols-3 gap-5 place-items-center">
          <Card title="Industry 4.0 " />
          <Card title="Life sciences" />
          <Card title="Mobility and Transportation" />
          <Card title="Energy and Environment" />
          <Card title="Food tech" />
          <Card title="Climate tech" />
        </div>
      </div>
      <section className="">
        <div className="container mapy-12 mx-auto space-y-24 ">
          {/* <div>
			<h2 className="text-3xl font-bold tracki text-center sm:text-5xl">Aliquip definiebas ad est</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center ">Quando cetero his ne, eum admodum sapientem ut.</p>
		</div> */}
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracki sm:text-3xl">
                Who are we looking for
              </h3>
              {/* <p className="mt-3 text-lg ">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p> */}
              <div className="mt-12 space-y-3">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    {/* <h4 className="text-lg font-medium leadi">Per ei quaeque sensibus</h4> */}
                    <p className="mt-2 ">
                      Startups with a clear and well-defined business idea or
                      concept, substantiated by evidence of initial validation
                      such as market research or a proof of concept (POC).
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    {/* <h4 className="text-lg font-medium leadi">Cu imperdiet posidonium sed</h4> */}
                    <p className="mt-2 ">
                      Startups possessing a clear identification and
                      understanding of the problem they aim to solve within
                      their chosen sector.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    {/* <h4 className="text-lg font-medium leadi">Nulla omittam sadipscing mel ne</h4> */}
                    <p className="mt-2 ">
                      Startups either in the early stages of development or led
                      by students from a recognized educational institution.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    {/* <h4 className="text-lg font-medium leadi">Cibo augue offendit has ad</h4> */}
                    <p className="mt-2 ">
                      For Green Tech, Climate Tech, and Energy Tech startups,
                      their potential to have a positive impact on society and
                      the environment may be an important criterion.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    {/* <h4 className="text-lg font-medium leadi">At eum ferri luptatum lobortis</h4> */}
                    <p className="mt-2 ">
                      Startups with ideas that demonstrate the potential for
                      scalability and growth in their respective markets.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    {/* <h4 className="text-lg font-medium leadi">
                      Dicunt verterem evertitur eu sea
                    </h4> */}
                    <p className="mt-2 ">
                      Startups with ideas that demonstrate the potential for
                      scalability and growth in their respective markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src="https://source.unsplash.com/random/360x480"
                alt=""
                className="mx-auto rounded-lg shadow-lg "
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class=" py-8">
          <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              {/* <p class='ml-2 text-yellow-300 uppercase tracking-loose'>
								Working Process
							</p> */}
              <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                How the Program Helps You
              </p>
              {/* <p class='text-sm md:text-base  mb-4'>
								Here’s your guide to the tech fest 2021 process. Go through all
								the steps to know the exact process of the fest.
							</p> */}
              {/* <Link
								to='#'
								class='bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent'
							>
								Explore Now
							</Link> */}
            </div>
            <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div class="container mx-auto w-full h-full">
                <div class="relative wrap overflow-hidden p-10 h-full">
                  <div
                    class="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid #FFC100",
                      borderRadius: "1%;",
                    }}
                  ></div>
                  <div
                    class="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid #FFC100",
                      borderRadius: "1%;",
                    }}
                  ></div>
                  <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                      {/* <p class='mb-3 text-base text-yellow-300'>
												1-6 May, 2021
											</p> */}
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">
                        9-Week Intensive Learning
                      </h4>
                      <p class="text-sm md:text-base leading-snug  text-opacity-100">
                        Dive deep into the essentials of starting a tech-based
                        business.
                      </p>
                    </div>
                  </div>
                  <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1  w-5/12 px-1 py-4 text-left">
                      {/* <p class='mb-3 text-base text-yellow-300'>
												6-9 May, 2021
											</p> */}
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">
                        Sector-Specific Workshops
                      </h4>
                      <p class="text-sm md:text-base leading-snug  text-opacity-100">
                        Gain in-depth knowledge in your chosen sector.
                      </p>
                    </div>
                  </div>
                  <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                      {/* <p class='mb-3 text-base text-yellow-300'>
												{' '}
												10 May, 2021
											</p> */}
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">
                        Mentorship and Networking
                      </h4>
                      <p class="text-sm md:text-base leading-snug  text-opacity-100">
                        Connect with industry experts and fellow entrepreneurs.
                      </p>
                    </div>
                  </div>

                  <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12"></div>

                    <div class="order-1  w-5/12 px-1 py-4">
                      {/* <p class='mb-3 text-base text-yellow-300'>12 May, 2021</p> */}
                      <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Pitch Deck Development
                      </h4>
                      <p class="text-sm md:text-base leading-snug  text-opacity-100">
                        Craft a compelling presentation for investors
                      </p>
                    </div>
                  </div>
                  <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                      {/* <p class='mb-3 text-base text-yellow-300'>
												{' '}
												10 May, 2021
											</p> */}
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">
                        Fundamentals of Funding
                      </h4>
                      <p class="text-sm md:text-base leading-snug  text-opacity-100">
                        Learn how to secure financial support for your venture.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <img
									class='mx-auto -mt-36 md:-mt-36'
									src='https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png'
								/> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl">
            Tech catalysts Progress Path
          </h1>

          <hr class="my-6 border-gray-200 dark:border-gray-700" />

          <div>
            {faq.map((f, i) => (
              <FaqContent title={f.title} content={f.content} />
            ))}
          </div>
        </div>
      </section> */}
      {/* <section className="">
        <div className="container mapy-12 mx-auto space-y-24 ">
          <div>
			<h2 className="text-3xl font-bold tracki text-center sm:text-5xl">Aliquip definiebas ad est</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center ">Quando cetero his ne, eum admodum sapientem ut.</p>
		</div>
          <div className="">
            <div>
              <h3 className="text-2xl font-bold tracki sm:text-3xl">
                Who are we looking for
              </h3>
              <p className="mt-3 text-lg ">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p>
              <div className="flex flex-row-reverse">
                <div className="mt-12 space-y-3">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi">Per ei quaeque sensibus</h4>
                      <p className="mt-2 ">
                        Startups with tech-oriented concepts or products related
                        to one of the specified sectors i.e., Deep Tech, Health
                        & Med Tech, Food Tech, Green Tech, Climate Tech and
                        Energy Tech.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi">Cu imperdiet posidonium sed</h4>
                      <p className="mt-2 ">
                        A clear and well-defined business idea or concept should
                        be in place, with evidence of initial validation such as
                        market research or a POC.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi">Nulla omittam sadipscing mel ne</h4>
                      <p className="mt-2 ">
                        A clear identification and understanding of the problem
                        the startup aims to solve within their chosen sector.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi">Cibo augue offendit has ad</h4>
                      <p className="mt-2 ">
                        Startups either in the early stages of development or
                        led by students from a recognized educational
                        institution
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi">At eum ferri luptatum lobortis</h4>
                      <p className="mt-2 ">
                        For Green Tech, Climate Tech, and Energy Tech startups,
                        their potential to have a positive impact on society and
                        the environment may be an important criterion.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi">
                        Dicunt verterem evertitur eu sea
                      </h4>
                      <p className="mt-2 ">
                        The startup idea should have the potential for
                        scalability and growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                  <img
                    src="https://source.unsplash.com/random/360x480"
                    alt=""
                    className="mx-auto rounded-lg shadow-lg "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-6 bg-gray-400 mt-4">
        <div className="text-white container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold leading lg:text-left w-3/4 mb-3">
              Ready To Take Your Tech Idea To The Next Level? Apply For The AIC
              Raise Pre-Incubation Program Today!
            </h1>
            <p>Last Date To Apply: 15.12.2023</p>
            <p>For Inquiries: 89257 45338</p>
            <p>Email : akshitakofficial@gmail.com</p>
          </div>
          <Link to="/apply/technopreneur">
            <button className="px-8 py-3 text-lg font-semibold rounded bg-purple-600 w-fit">
              Apply Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const Card = ({ title }) => {
  return (
    <div class=" h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl">
      <svg class="h-14" viewBox="0 0 177 171">
        <ellipse cx="107" cy="122" rx="53.6" ry="49.2" fill="#fab529" />
        <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4.2">
          <path d="m88.4 83.8c-13.3 19.7-11.3 35.6-3.21 53.6" />
          <path d="m14.8 114c6.49 15.1 14.3 28.3 31.3 28.7" />
          <path d="m121 165c38.5 8.41 56.2-30.2 54.6-52.5-1.64-22.3-14.4-57.2-55.1-46.4" />
          <path d="m120 165c-38.5 8.41-56.2-30.2-54.6-52.5 1.64-22.3 14.4-57.2 55.1-46.4" />
          <path d="m115 41.6v-9.2c0-2.47 1.99-4.46 4.46-4.46s4.46 1.99 4.46 4.46v13.4" />
          <path d="m151 31.1c-8.19 1.34-15.3-0.291-30.2 19.2v15.7c9.29 3.53 27.7-20.4 30.2-34.9z" />
          <path d="m90 29.3c15.6-0.0918 24 9.29 30.7 21v15.7c-11-8.01-23.6-7.92-30.7-36.7z" />
          <path d="m24.9 10.4c3.42-3.09 7.43-4.06 11.6-4.53" />
          <path d="m32.3 26.2c-1.82-6.37-8.48-18-14.5-22.9-4.07-0.39-6.34 0.218-7.8 5.05 7.73 7.54 10.5 13.7 14.8 21.7" />
          <path d="m82.3 25.6c-15.1 0.422-35.4-4.06-45.8-19.7 25.7-13.6 40.8 7.28 45.8 19.7z" />
          <path d="m66.9 16.2c-9.8-7.37-19.9-11.1-30.4-10.4" />
          <path d="m64.6 152c-26.2 20.7-65.7-16.3-63-46.1 1.33-14.5 6.37-22.5 9.58-27.5s1.06-10.1 1.65-10.2c-3.12-17.6-0.924-34.1 18-40" />
          <path d="m64.6 152c33 4.8 48.8-47 31.5-71.4-8.39-11.9-16.8-16.3-22-19-5.24-2.65-5.95-8.19-6.54-8.03-6.11-16.8-17.4-29.7-36.7-25.4" />
        </g>
      </svg>
      <span class="mt-6 text-sm ?leading-5 font-semibold text-center">
        {title}
      </span>
    </div>
  );
};

const FaqContent = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button
          class="flex items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            class="flex-shrink-0 w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            ></path>
          </svg>

          <h1 class="mx-4 text-xl text-gray-700">{title}</h1>
        </button>

        <div
          class={`flex md:mx-10 ${
            !isOpen && "h-0 overflow-hidden"
          } transition-all`}
        >
          <span class="border border-blue-500"></span>

          <ul class="max-w-3xl px-4 text-gray-500">
            {content.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <hr class="my-8 border-gray-200 dark:border-gray-700" />
    </>
  );
};

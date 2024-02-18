import React from "react";
import { Helmet } from "react-helmet"

import HeroSection from '../../components/common/Hero/HeroSection'

export const IpSupport = () => {
  <Helmet>
  <title>IP Support | SIIF</title>
</Helmet>
  return (
    <>
      <div class="px-10 lg:px-14 xl:px-16">
        <HeroSection title="Innovation & Patent Cell" desc=" At SIIF, we recognize that innovation is the lifeblood of
          entrepreneurship. Our Innovation & Patent Cell is dedicated to
          supporting startups in protecting and maximizing the value of their
          intellectual property (IP) assets. We understand the critical role
          that patents play in safeguarding innovations and providing a
          competitive edge in the marketplace."
          image="https://t4.ftcdn.net/jpg/03/54/00/91/240_F_354009182_Cc6DzlgU402u1bXAGyvXAbmp5EgYAV9D.jpg"
          />
        {/* <h1 class="text-4xl font-medium text-gray-700 text-center mt-6">
          Innovation & Patent Cell
        </h1> */}
        {/* <p class="text-center mt-6 text-lg font-light text-gray-500">
          At SIIF, we recognize that innovation is the lifeblood of
          entrepreneurship. Our Innovation & Patent Cell is dedicated to
          supporting startups in protecting and maximizing the value of their
          intellectual property (IP) assets. We understand the critical role
          that patents play in safeguarding innovations and providing a
          competitive edge in the marketplace.
        </p> */}
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 px-10 lg:px-14 xl:px-16">
        <div class="p-8">
          <div class="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 class="uppercase mt-6 text-indigo-500 font-medium mb-3">
            Patent Advisory Services:
          </h2>
          <p class="font-light text-sm text-gray-500 mb-3">
            Our experienced team of patent professionals provides expert
            guidance on all aspects of the patenting process.
          </p>
          {/* <a
						class='text-indigo-500 flex items-center hover:text-indigo-600'
						href='/'
					>
						More about us icon
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fill-rule='evenodd'
								d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
								clip-rule='evenodd'
							/>
						</svg>
					</a> */}
        </div>
        <div class="p-8">
          <div class="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 class="uppercase mt-6 text-green-500 font-medium mb-3">
            IP Strategy Development
          </h2>
          <p class="font-light text-sm text-gray-500 mb-3">
            We work closely with startups to develop comprehensive IP strategies
            tailored to their business goals.
          </p>
          {/* <a
						class='text-green-500 flex items-center hover:text-green-600'
						href='/'
					>
						More about us icon
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fill-rule='evenodd'
								d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
								clip-rule='evenodd'
							/>
						</svg>
					</a> */}
        </div>
        <div class="p-8">
          <div class="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 class="uppercase mt-6 text-red-500 font-medium mb-3">
            Patent Workshops and Seminars
          </h2>
          <p class="font-light text-sm text-gray-500 mb-3">
            We regularly organize workshops and seminars on patent law, IP
            strategy, and innovation management.
          </p>
          {/* <a class='text-red-500 flex items-center hover:text-red-600' href='/'>
						More about us icon
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fill-rule='evenodd'
								d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
								clip-rule='evenodd'
							/>
						</svg>
					</a> */}
        </div>
        <div class="p-8">
          <div class="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 class="uppercase mt-6 text-red-500 font-medium mb-3">
            Patent Funding Assistance
          </h2>
          <p class="font-light text-sm text-gray-500 mb-3">
            We assist startups in identifying and accessing funding
            opportunities for patent-related activities, including patent filing
            fees, attorney costs, and maintenance fees.
          </p>
          {/* <a class='text-red-500 flex items-center hover:text-red-600' href='/'>
						More about us icon
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fill-rule='evenodd'
								d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
								clip-rule='evenodd'
							/>
						</svg>
					</a> */}
        </div>
        <div class="p-8">
          <div class="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 class="uppercase mt-6 text-red-500 font-medium mb-3">
            Networking and Collaboration
          </h2>
          <p class="font-light text-sm text-gray-500 mb-3">
            We facilitate connections between startups, patent attorneys,
            investors, and industry experts to foster collaboration and
            knowledge sharing.
          </p>
          {/* <a class='text-red-500 flex items-center hover:text-red-600' href='/'>
						More about us icon
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fill-rule='evenodd'
								d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
								clip-rule='evenodd'
							/>
						</svg>
					</a> */}
        </div>
      </div>
    </>
  );
};

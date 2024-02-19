import React from "react"
import { Helmet } from "react-helmet"

import HeroSection from "../../../components/common/Hero/HeroSection"

export const RenewableEnergy = () => {
	return (
		<>
			<Helmet>
				<title>Renewable Energy | SIIF</title>
			</Helmet>
			<HeroSection
				image="https://media.istockphoto.com/id/1337173750/photo/solar-and-wind-power.webp?b=1&s=170667a&w=0&k=20&c=ndH8g29msXx-1clcf1ylcwzWtAet6tEXOWE_DzKmWLg="
				title="Renewable Energy"
				desc=" Welcome to Renewable Energy, where innovation meets sustainability.
            We specialize in harnessing the power of nature to provide clean and
            reliable energy solutions. "
			/>
			<div className="w-[90%] lg:w-[80%] my-10 h-fit relative flex flex-col lg:flex-row mx-auto items-center justify-center bg-[#8e8484] rounded-md">
				<div className="w-[90%] lg:w-[45%] lg:py-[5rem] py-[1.5rem] lg:mr-16">
					<h1 className="font-bold  mb-2 lg:mb-5  text-xl md:text-3xl text-[#f6f6f6]">
						Renewable Energy
					</h1>
					<p className="leading-[2rem] text-[#f6f6f6] text-justify">
						From solar and wind to hydro and geothermal, we offer a
						diverse range of renewable options tailored to your
						needs. Our commitment to environmental stewardship and
						cutting-edge technology ensures a brighter, greener
						future for generations to come. Join us in powering a
						sustainable tomorrow with Renewable Energy.
					</p>
				</div>

				<img
					className="w-[90%] lg:w-[35%]  lg:my-[5rem] my-[3rem]"
					style={{ borderRadius: "3%" }}
					src="https://www.thedigitalspeaker.com/content/images/2023/10/Futureo-of-Mobility-Keynote-Speaker.jpg"
					alt=""
				/>
			</div>
			<div className="w-[90%]  lg:w-[80%]  flex flex-col lg:flex-row justify-between  py-2 lg:py-5 mt-7 mx-auto text-gray-900 rounded-lg">
				<div className="flex flex-col w-full lg:w-[50%] px-[5%] mx-auto  mb-3 lg:mb-0 ">
					<h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
						Amenities
					</h2>
					<div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
						<ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
							<li>
								We employ cutting-edge technology to harness
								renewable energy sources such as solar, wind,
								hydro, and geothermal power.
							</li>
							<li>
								Our dedicated R&D center is focused on
								innovation and improvement in renewable energy
								technologies.
							</li>
							<li>
								Our facilities are equipped with robust grid
								integration infrastructure to seamlessly
								integrate renewable energy into existing power
								grids.
							</li>
							<li>
								We employ sophisticated environmental monitoring
								systems to ensure our operations have minimal
								impact on the surrounding ecosystem.
							</li>
							<li>
								Our facilities include customer education and
								training centers aimed at raising awareness
								about renewable energy and promoting its
								adoption.
							</li>
						</ul>
					</div>
				</div>
				<div className="w-full lg:w-[50%] mx-auto">
					<h2 className="text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
						Services
					</h2>
					<div className="text-gray-700 my-3 md:mt-8 w-full md:w-3/4">
						<ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
							<li>
								We offer tailored renewable energy solutions
								designed to meet the specific needs and
								requirements of our clients.
							</li>
							<li>
								From initial feasibility studies to project
								commissioning, we offer comprehensive turnkey
								solutions for renewable energy projects.
							</li>
							<li>
								In addition to renewable energy solutions, we
								provide energy efficiency consulting services to
								help clients optimize their energy usage and
								reduce waste.
							</li>
							<li>
								We offer ongoing maintenance and support
								services to ensure the continued performance and
								reliability of renewable energy systems.
							</li>
							<li>
								We assist clients in navigating financial
								incentives, subsidies, and regulatory
								requirements associated with renewable energy
								projects.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

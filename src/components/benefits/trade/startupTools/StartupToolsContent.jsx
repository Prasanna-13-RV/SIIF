import React, { useState } from "react"
import { StartupToolsSingleCard } from "./StartupToolsSingleCard"

export const StartupToolsContent = () => {
	const [tools, setTools] = useState([
		{
			toolImage:
				"https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
			toolTitle: "Domain name",
		},
		{
			toolImage:
				"https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
			toolTitle: "Domain name",
		},
		{
			toolImage:
				"https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
			toolTitle: "Domain name",
		},
	])

	return (
		<section>
			<div className="lg:mx-auto lg:w-full px-8 py-5">
				<div className="lg:mx-auto  lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
					<div className="text-base leading-7 text-gray-700 ">
						<h1 className="my-2 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl">
							Startup Tools
						</h1>
					</div>
					<div className="lg:mx-auto p-5 lg:w-full lg:max-w-7xl">
						<StartupToolsSingleCard
							mainImage="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
							mainTitle="domain"
							tools={tools}
						/>
						<StartupToolsSingleCard
							mainImage="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
							mainTitle="domain"
							tools={tools}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

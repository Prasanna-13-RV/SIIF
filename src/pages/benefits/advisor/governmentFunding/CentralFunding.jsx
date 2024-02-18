import React, { useState } from "react"
import { CentralHero } from "../../../../components/benefits/advisor/governmentFunding/centralFunding/CentralHero"
import { CentralContent } from "../../../../components/benefits/advisor/governmentFunding/centralFunding/CentralContent"
import { Helmet } from "react-helmet"
import { ComingSoon } from "../../../../components/common/extra/ComingSoon"
import { AngelInvestors } from "../privateFunding/AngelInvestors"
import { VentureCapitalist } from "../privateFunding/VentureCapitalist"

export const CentralFunding = () => {
	const handleClick = (text) => {
		setUnderLine(text)
	}
	const [underLine, setUnderLine] = useState("Angel Investors")

	const [funding, setFunding] = useState(<AngelInvestors />)

	return (
		<div>
			<Helmet title="Central Funding | SIIF" />
			<CentralHero />
			<nav className="bg-white relative ">
				<div className="container flex flex-col items-center p-6 mx-auto">
					<div className="flex items-center justify-center mt-6 text-gray-600 capitalize ">
						<button
							className={`mx-2 border-b-2 ${
								underLine === "Angel Investors"
									? "border-blue-500"
									: "border-transparent"
							} hover:text-gray-800 hover:border-blue-500 sm:mx-6`}
							onClick={() => {
								handleClick("Angel Investors")
								setFunding(<AngelInvestors />)
							}}>
							Angel Investors
						</button>

						<button
							className={`mx-2 border-b-2 ${
								underLine === "Venture Capitalists"
									? "border-blue-500"
									: "border-transparent"
							} hover:text-gray-800 hover:border-blue-500 sm:mx-6`}
							onClick={() => {
								handleClick("Venture Capitalists")
								setFunding(<VentureCapitalist />)
							}}>
							Venture Capitalists
						</button>
					</div>
				</div>
			</nav>
			{/* <CentralContent /> */}
			<section className="relative mt-24">
				{funding}
			</section>
		</div>
	)
}

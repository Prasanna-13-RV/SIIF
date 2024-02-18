import React, { useState } from "react"
import { StateFundingHero } from "../../../../components/benefits/advisor/governmentFunding/stateFunding/StateFundingHero"
import { StartupTNContent } from "../../../../components/benefits/advisor/governmentFunding/stateFunding/StartupTNContent"
import { StateFundingContent } from "../../../../components/benefits/advisor/governmentFunding/stateFunding/StateFundingContent"
import { Helmet } from "react-helmet"
import { ComingSoon } from "../../../../components/common/extra/ComingSoon"

export const StateFunding = () => {
	const handleClick = (text) => {
		setUnderLine(text)
	}
	const [underLine, setUnderLine] = useState("EDII-IVP")

	const [funding, setFunding] = useState(<StateFundingContent />)

	return (
		<>
			<Helmet title="State Funding | SIIF" />
			<StateFundingHero />
			<nav className="bg-white relative ">
				<div className="container flex flex-col items-center p-6 mx-auto">
					<div className="flex items-center justify-center mt-6 text-gray-600 capitalize ">
						<button
							className={`mx-2 border-b-2 ${
								underLine === "EDII-IVP"
									? "border-blue-500"
									: "border-transparent"
							} hover:text-gray-800 hover:border-blue-500 sm:mx-6`}
							onClick={() => {
								handleClick("EDII-IVP")
								setFunding(<StateFundingContent />)
							}}>
							EDII-IVP
						</button>

						<button
							className={`mx-2 border-b-2 ${
								underLine === "StartupTN"
									? "border-blue-500"
									: "border-transparent"
							} hover:text-gray-800 hover:border-blue-500 sm:mx-6`}
							onClick={() => {
								handleClick("StartupTN")
								setFunding(<ComingSoon />)
							}}>
							StartupTN
						</button>
					</div>
				</div>
			</nav>
			<section className="relative mt-24">{funding}</section>
		</>
	)
}

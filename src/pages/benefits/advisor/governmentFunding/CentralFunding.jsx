import React from "react"
import { CentralHero } from "../../../../components/benefits/advisor/governmentFunding/centralFunding/CentralHero"
import { CentralContent } from "../../../../components/benefits/advisor/governmentFunding/centralFunding/CentralContent"
import { Helmet } from "react-helmet"

export const CentralFunding = () => {
	return (
		<div>
			<Helmet title="Central Funding | SIIF" />
			<CentralHero />
            <CentralContent />
		</div>
	)
}

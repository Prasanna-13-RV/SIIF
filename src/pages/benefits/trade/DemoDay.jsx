import React from "react"
import { DemoDayHero } from "../../../components/benefits/trade/demoDay/DemoDayHero"
import { DemoDayContent } from "../../../components/benefits/trade/demoDay/DemoDayContent"
import { Helmet } from "react-helmet"

export const DemoDay = () => {
	return (
		<div>
			<Helmet title="Demo Day | SIIF" />
			<DemoDayHero />
			<DemoDayContent />
		</div>
	)
}

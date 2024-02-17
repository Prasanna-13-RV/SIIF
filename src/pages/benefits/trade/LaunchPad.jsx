import React from "react"
import { LaunchPadHero } from "../../../components/benefits/trade/launchPad/LaunchPadHero"
import { LaunchPadContent } from "../../../components/benefits/trade/launchPad/LaunchPadContent"
import { Helmet } from "react-helmet"

export const LaunchPad = () => {
	return (
		<div>
			<Helmet title="Launch pad | SIIF" />
			<LaunchPadHero />
			<LaunchPadContent />
		</div>
	)
}

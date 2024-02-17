import React from "react"
import { StartupToolsHero } from "../../../components/benefits/trade/startupTools/StartupToolsHero"
import { StartupToolsContent } from "../../../components/benefits/trade/startupTools/StartupToolsContent"
import { Helmet } from "react-helmet"

export const StartupTools = () => {
	return (
		<div>
			<Helmet title="Startup Tools | SIIF" />
			<StartupToolsHero />
			<StartupToolsContent />
		</div>
	)
}

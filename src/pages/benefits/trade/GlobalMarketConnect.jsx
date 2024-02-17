import React from "react"
import { GlobalMarketConnectHero } from "../../../components/benefits/trade/globalMarketConnect/GlobalMarketConnectHero"
import { GlobalMarketCards } from "../../../components/benefits/trade/globalMarketConnect/GlobalMarketCards"
import { Helmet } from "react-helmet"

export const GlobalMarketConnect = () => {
	return (
		<div>
			<Helmet title="Global Market Connect | SIIF" />
			<GlobalMarketConnectHero />
			<GlobalMarketCards />
		</div>
	)
}

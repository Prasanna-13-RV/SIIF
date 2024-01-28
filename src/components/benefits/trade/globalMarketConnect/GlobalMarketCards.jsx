import React from "react"
import { GlobalMarketSingleCard } from "./GlobalMarketSingleCard"

export const GlobalMarketCards = () => {
	return (
		<section className="flex flex-row flex-wrap px-11 py-11 items-center justify-between">
			<GlobalMarketSingleCard
				image="https://ciic.ventures/wp-content/uploads/2022/02/dubai-partners.jpg"
				title="Dubai Partners"
			/>
			<GlobalMarketSingleCard
				image="https://ciic.ventures/wp-content/uploads/2022/02/dubai-partners.jpg"
				title="European Partners"
			/>
			<GlobalMarketSingleCard
				image="https://ciic.ventures/wp-content/uploads/2022/02/dubai-partners.jpg"
				title="African Partners"
			/>
			<GlobalMarketSingleCard
				image="https://ciic.ventures/wp-content/uploads/2022/02/dubai-partners.jpg"
				title="American Partners"
			/>
			<GlobalMarketSingleCard
				image="https://ciic.ventures/wp-content/uploads/2022/02/dubai-partners.jpg"
				title="Gitex"
			/>
			<GlobalMarketSingleCard
				image="https://ciic.ventures/wp-content/uploads/2022/02/dubai-partners.jpg"
				title="International Connect Report"
			/>
		</section>
	)
}

import React, { useState } from "react"
import { AngelHero } from "../../../../components/benefits/advisor/privateFunding/angelInvestors/AngelHero"
import { AngelContent } from "../../../../components/benefits/advisor/privateFunding/angelInvestors/AngelContent"
import { Helmet } from "react-helmet"
import { ComingSoon } from "../../../../components/common/extra/ComingSoon"

export const AngelInvestors = () => {
	return (
		<>
			<Helmet title="Angel Investors | SIIF" />
			{/* <AngelHero />
			<AngelContent /> */}
			<ComingSoon />
		</>
	)
}

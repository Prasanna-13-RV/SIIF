import React, { useState } from "react"
import { VentureHero } from "../../../../components/benefits/advisor/privateFunding/venture/VentureHero"
import { VentureContent } from "../../../../components/benefits/advisor/privateFunding/venture/VentureContent"
import { Helmet } from "react-helmet"
import { ComingSoon } from "../../../../components/common/extra/ComingSoon"

export const VentureCapitalist = () => {
	return (
		<>
			<Helmet title="Venture Capitalist | SIIF" />
			{/* <VentureHero />
			<VentureContent /> */}
			<ComingSoon />
		</>
	)
}

import React from "react"
import { ReportHero } from "../../components/media/report/ReportHero"
import { ReportComponent } from "../../components/media/report/ReportComponent"
import { Helmet } from "react-helmet"

export const AnnualReport = () => {
	return (
		<>
		<Helmet title="Annual Report | SIIF" />
			<ReportHero />
			<ReportComponent />
		</>
	)
}

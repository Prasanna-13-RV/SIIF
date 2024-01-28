import React from "react"
import { ClinicHero } from "../../../components/benefits/captial/clinic/ClinicHero"
import ClinicContent from "../../../components/benefits/captial/clinic/ClinicContent"
import { ClinicTable } from "../../../components/benefits/captial/clinic/ClinicTable"
import { ClinicImages } from "../../../components/benefits/captial/clinic/ClinicImages"

function Clinic() {
	return (
		<>
			<ClinicHero />
			<ClinicContent />
			<ClinicTable />
			<ClinicImages />
		</>
	)
}

export default Clinic

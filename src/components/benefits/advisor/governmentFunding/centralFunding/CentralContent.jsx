import React from "react"
import { CentralSingleCardContent } from "./CentralSingleCardContent"

export const CentralContent = () => {
	return (
		<div className="px-10 py-6 flex flex-row flex-wrap items-center justify-center">
			<CentralSingleCardContent
				title={"DEPARTMENT OF BIOTECHNOLOGY (DBT) BIRAC – BIONEST"}
				link={""}
			/>
			<CentralSingleCardContent title={"SISFS"} link={""} />
			<CentralSingleCardContent
				title={"SAMRIDH ACCELERATOR PROGRAM"}
				link={""}
			/>
			<CentralSingleCardContent
				title={"SIH HARDWARE EDITION"}
				link={""}
			/>
			<CentralSingleCardContent title={"NIDHI PRAYAS"} link={""} />
			<CentralSingleCardContent
				title={"FISHERIES STARTUP GRANT CHALLENGE"}
				link={""}
			/>
		</div>
	)
}

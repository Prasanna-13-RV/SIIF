import React from "react"
import { ConnectHero } from "../../../components/benefits/captial/connect/ConnectHero"
import { ConnectContent } from "../../../components/benefits/captial/connect/ConnectContent"
import { ConnectTable } from "../../../components/benefits/captial/connect/ConnectTable"
import { ConnectImages } from "../../../components/benefits/captial/connect/ConnectImages"

export const Connect = () => {
	return (
		<>
			<ConnectHero />
			<ConnectContent />
			<ConnectTable />
			<ConnectImages />
		</>
	)
}

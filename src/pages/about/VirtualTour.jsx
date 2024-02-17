import React from "react"
import { Helmet } from "react-helmet"
import { Page404 } from "../../components/common/extra/Page404"

export const VirtualTour = () => {
	return (
		<>
			<Helmet>
				<title>About | VirtualTour</title>
			</Helmet>
			{/* <h1>VirtualTour</h1> */}
			<Page404 />
		</>
	)
}

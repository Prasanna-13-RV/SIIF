import React from "react"
import { ConnectHero } from "../../../components/benefits/captial/connect/ConnectHero"
import { ConnectContent } from "../../../components/benefits/captial/connect/ConnectContent"
import { ConnectTable } from "../../../components/benefits/captial/connect/ConnectTable"
import { ConnectImages } from "../../../components/benefits/captial/connect/ConnectImages"
import HeroSection from "../../../components/common/Hero/HeroSection"
import { Helmet } from "react-helmet"

export const Connect = () => {
	return (
		<>
			<Helmet title="Connect Captial | SIIF" />
			<HeroSection
				image="https://www.ibrasiagroup.com/wp-content/uploads/2023/07/stock-photo-audience-at-the-conference-hall-business-conference-and-presentation-728227891-transformed-1.jpeg"
				title="Capital Connect"
				desc="Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nesciunt illo tenetur fuga ducimus numquam ea!"
			/>
			<ConnectContent />
			<ConnectTable />
			<ConnectImages />
		</>
	)
}

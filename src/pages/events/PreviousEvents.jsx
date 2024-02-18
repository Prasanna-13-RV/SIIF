import React from "react"
import { PreviousEventCards } from "../../components/events/previousEvents/PreviousEventCards"
import HeroSection from "../../components/common/Hero/HeroSection"
import { Helmet } from "react-helmet"

export const PreviousEvents = () => {
	return (
		<>
			<Helmet title="Past Events | SIIF" />
			<HeroSection
				image="https://cdn.pixabay.com/photo/2018/05/31/11/54/celebration-3443779_640.jpg"
				title="Past Events"
				desc=""
			/>

			<PreviousEventCards />
		</>
	)
}

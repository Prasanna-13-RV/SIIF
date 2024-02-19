import React from "react"
import { UpcomingEventCards } from "../../components/events/upcomingEvents/UpcomingEventCards"
import HeroSection from "../../components/common/Hero/HeroSection"
import { Helmet } from "react-helmet"

export const UpcomingEvents = () => {
	return (
		<>
			<Helmet title="Upcoming Events | SIIF" />
			<HeroSection
				image="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg"
				title="Upcoming Events"
				desc=""
			/>
			<UpcomingEventCards />
		</>
	)
}

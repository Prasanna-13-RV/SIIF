import React from "react"
import { UpcomingEventCards } from "../../components/events/upcomingEvents/UpcomingEventCards"
import HeroSection from "../../components/common/Hero/HeroSection"
import { Helmet } from "react-helmet"

export const UpcomingEvents = () => {
	return (
		<>
			<Helmet title="Upcoming Events | SIIF" />
			<HeroSection
				image="https://blog.xoxoday.com/content/images/2022/01/Your-Complete-Guide-to-Maximizing-Conversions-from-On-Ground-Events.jpg"
				title="Upcoming Events"
				desc="Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nesciunt illo tenetur fuga ducimus numquam ea!"
			/>
			<UpcomingEventCards />
		</>
	)
}

import React from "react"
import { EventSingleCard } from "../EventSingleCard"
import image1 from "../../../img/events/upcoming_event1.jpg"

export const UpcomingEventCards = () => {
	return (
		<section className="relative items-center justify-center w-full my-3 mx-auto max-w-screen-xl sm:px-6 lg:flex flex-row flex-wrap lg:items-center lg:px-8">
			<EventSingleCard
				link="https://www.instagram.com/p/C3ZzIbsBeef/"
				image={image1}
				// title={"Noteworthy technology acquisitions 2021"}
				// description={
				// 	"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order"
				// }
			/>
		</section>
	)
}

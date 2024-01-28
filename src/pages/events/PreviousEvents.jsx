import React from "react"
import { PreviousEventCards } from "../../components/events/previousEvents/PreviousEventCards"
import { PreviousEventHero } from "../../components/events/previousEvents/PreviousEventHero"

export const PreviousEvents = () => {
	return (
		<>
			<PreviousEventHero />
			<PreviousEventCards />
		</>
	)
}

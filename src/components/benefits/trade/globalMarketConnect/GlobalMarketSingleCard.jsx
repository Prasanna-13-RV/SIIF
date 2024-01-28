import React from "react"

export const GlobalMarketSingleCard = ({ image, title }) => {
	return (
		<div className="shadow-lg rounded-lg m-3">
			<img className="rounded-t-lg w-[20rem]" src={image} alt="" />
			<p className="my-2 sm:text-xl/relaxed text-center">{title}</p>
		</div>
	)
}

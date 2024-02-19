import React from "react"

export const EventSingleCard = ({ link, image, title, description }) => {
	return (
		<div className="mx-2 my-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
			<div>
				<a href={link} target="_blank">
					<img src={image} alt="" />
				</a>
				{/* <iframe
					src="https://www.instagram.com/p/C3R-B1bvbjb/"
					title="Instagram Embed"
					frameborder="0"
					allowfullscreen></iframe> */}
			</div>
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
						{title}
					</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 ">{description}</p>
			</div>
		</div>
	)
}

import React, { useState } from "react"

export const UpcomingEventCard = ({ link, image, title, description }) => {
	const [isLoading, setIsLoading] = useState(true)

	// Function to handle image load
	const handleImageLoad = () => {
		setIsLoading(false) // Image has loaded
	}

	return (
		<div className="mx-2 my-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
			<div>
				{isLoading && (
					<div
						className="flex justify-center items-center"
						style={{ minHeight: "200px", minWidth: "300px" }} // Set a fixed height for the loading spinner
					>
						{/* You can replace this with your custom loading animation */}
						<div
							className="spinner-border text-primary"
							role="status">
							<span className="visually-hidden text-slate-950">
								Loading...
							</span>
						</div>
					</div>
				)}
				{/* Actual image */}
				<a href={link} target="_blank">
					<img
						src={image}
						alt=""
						onLoad={handleImageLoad} // Call handleImageLoad when the image is loaded
						style={{
							display: isLoading ? "none" : "block",
							width: "100%",
						}}
					/>
				</a>
			</div>
			{/* <div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
						{title}
					</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 ">{description}</p>
			</div> */}
		</div>
	)
}

import React from "react"

export const ReportSingleCard = ({ image, title, downloadLink }) => {
	return (
		<div className="max-w-sm py-3 m-3">
			<div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
				<img className="rounded-t-lg" src={image} alt="" />
				<div className="py-6 px-8 rounded-lg bg-white">
					<h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
						{title}
					</h1>
					<a
						href={downloadLink}
						download
						className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
						Download
					</a>
				</div>
			</div>
		</div>
	)
}

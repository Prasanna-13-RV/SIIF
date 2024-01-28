import React, { useState } from "react"
import { ReportSingleCard } from "./ReportSingleCard"

export const ReportComponent = () => {
	const [reportArray, setReportArray] = useState([
		{
			image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
			title: "I'm supper dog for you.",
			downloadLink: "hello",
		},
		{
			image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
			title: "I'm supper dog for you.",
			downloadLink: "hello",
		},
	])

	const handleClick = (text) => {
		setUnderLine(text)
	}
	const [underLine, setUnderLine] = useState("Annual Reports")

	return (
		<header className="bg-white">
			<nav className="bg-white">
				<div className="container flex flex-col items-center p-6 mx-auto">
					<div className="flex items-center justify-center mt-6 text-gray-600 capitalize ">
						<button
							className={`mx-2 border-b-2 ${
								underLine === "Annual Reports"
									? "border-blue-500"
									: "border-transparent"
							} hover:text-gray-800 hover:border-blue-500 sm:mx-6`}
							onClick={() => {
								setReportArray([
									{
										image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
										title: "I'm supper dog for you.",
										downloadLink: "hello",
									},
									{
										image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
										title: "I'm supper dog for you.",
										downloadLink: "hello",
									},
								])
								handleClick("Annual Reports")
							}}>
							Annual Reports
						</button>

						<button
							className={`mx-2 border-b-2 ${
								underLine === "Impact Reports"
									? "border-blue-500"
									: "border-transparent"
							} hover:text-gray-800 hover:border-blue-500 sm:mx-6`}
							onClick={() => {
								setReportArray([
									{
										image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
										title: "For you.",
										downloadLink: "hello",
									},
									{
										image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
										title: "For you.",
										downloadLink: "hello",
									},
									{
										image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
										title: "For you.",
										downloadLink: "hello",
									},
								])
								handleClick("Impact Reports")
							}}>
							Impact Reports
						</button>

						<button
							className={`mx-2 border-b-2 ${
								underLine === "Newsletter"
									? "border-blue-500"
									: "border-transparent"
							} hover:text-gray-800 hover:border-blue-500 sm:mx-6`}
							onClick={() => {
								setReportArray([
									{
										image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
										title: "For you.",
										downloadLink: "hello",
									},
									{
										image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
										title: "For you.",
										downloadLink: "hello",
									},
								])
								handleClick("Newsletter")
							}}>
							Newsletter
						</button>
					</div>
				</div>
			</nav>

			<div className="flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-2 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center">
				{reportArray.map((report) => {
					return (
						<ReportSingleCard
							key={report}
							image={report.image}
							title={report.title}
							downloadLink={report.downloadLink}
						/>
					)
				})}
			</div>
		</header>
	)
}

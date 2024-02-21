import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Section = styled.section`
	background-image: url(${(props) => props.image});
	position: relative;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`

const HeroSection = ({ title, desc, image }) => {
	const handleGetStartedClick = () => {
		// Calculate the position to scroll halfway down the page
		const halfPageHeight = window.innerHeight
		// Scroll the page to the calculated position
		window.scrollTo({
			top: halfPageHeight,
			behavior: "smooth", // Optional: Smooth scrolling animation
		})
	}

	return (
		<Section image={image}>
			<div className="absolute inset-0 sm:bg-transparent sm:from-white/55 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l lg:bg-gradient-to-r"></div>

			<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
				<div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
					<h1 className="text-3xl font-extrabold sm:text-5xl text-left">
						{title}
						{/* <strong className="block font-extrabold text-blue-700">
        {" "}
        Forever Home.{" "}
      </strong> */}
					</h1>

					<p className="mt-4 max-w-lg sm:text-xl/relaxed text-left">
						{desc}
					</p>

					<div className="mt-8 flex flex-wrap gap-4 text-center">
						<a
							onClick={handleGetStartedClick}
							className="block w-full rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto">
							Get Started
						</a>

						<a
							href="/"
							className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-orange-600 shadow hover:text-orange-700 focus:outline-none focus:ring active:text-orange-500 sm:w-auto">
							Learn More
						</a>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default HeroSection

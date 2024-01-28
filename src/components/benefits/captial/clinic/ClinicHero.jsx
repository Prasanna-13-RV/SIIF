import React from "react"

export const ClinicHero = () => {
	return (
		<section className="relative bg-[url(https://www.ibrasiagroup.com/wp-content/uploads/2023/07/stock-photo-audience-at-the-conference-hall-business-conference-and-presentation-728227891-transformed-1.jpeg)] bg-cover bg-center bg-no-repeat">
			<div className="absolute inset-0 sm:bg-transparent sm:from-white/55 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l lg:bg-gradient-to-r"></div>

			<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
				<div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
					<h1 className="text-3xl font-extrabold sm:text-5xl">
						Capital Clinic
						{/* <strong className="block font-extrabold text-blue-700">
							{" "}
							Forever Home.{" "}
						</strong> */}
					</h1>

					<p className="mt-4 max-w-lg sm:text-xl/relaxed">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nesciunt illo tenetur fuga ducimus numquam ea!
					</p>

					<div className="mt-8 flex flex-wrap gap-4 text-center">
						<a
							href="#"
							className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
							Get Started
						</a>

						<a
							href="#"
							className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto">
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

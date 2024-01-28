import React from "react"

export const StartupToolsSingleCard = ({ mainImage, mainTitle, tools }) => {
	return (
		<section className="flex lg:flex-row w-full flex-col justify-between items-center bg-gray-300 rounded-lg my-2">
			<div className="max-w-sm w-2/5 shadow lg:mr-10 flex flex-col items-center justify-center h-fit">
				<img
					className="lg:w-[15rem] rounded-lg p-2 pt-5 w-[10rem]"
					src={mainImage}
					alt=""
				/>
				<div className="p-2">
					<h5 className="mb-2 lg:text-2xl text-xl font-bold tracking-tight text-gray-900 ">
						{mainTitle}
					</h5>
				</div>
			</div>
			<div className="w-3/5 flex flex-row flex-wrap items-center justify-center">
				{tools.map((tool) => {
					return (
						<div className="max-w-sm w-[10rem] bg-white border m-2 border-gray-200 rounded-mg shadow">
							<img
								className="rounded-t-sm w-[20rem]"
								src={tool.toolImage}
								alt=""
							/>
							<div className="p-5">
								<h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
									{tool.toolTitle}
								</h5>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

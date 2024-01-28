import React from "react"

export const StartupToolsSingleCard = ({ mainImage, mainTitle, tools }) => {
	return (
		<section className="flex flex-row w-full justify-between items-center bg-gray-300 rounded-lg my-2">
			<div class="max-w-sm w-2/5 shadow mr-10 flex flex-col items-center justify-center h-fit">
				<img class="w-[15rem] rounded-t-sm" src={mainImage} alt="" />
				<div class="p-5">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
						{mainTitle}
					</h5>
				</div>
			</div>
			<div className="w-3/5 flex flex-row flex-wrap items-center justify-center">
				{tools.map((tool) => (
					<div className="max-w-sm bg-white border m-2 border-gray-200 rounded-mg shadow">
						<img
							class="rounded-t-sm w-[20rem]"
							src={tool.toolImage}
							alt=""
						/>
						<div class="p-5">
							<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
								{tool.toolTitle}
							</h5>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

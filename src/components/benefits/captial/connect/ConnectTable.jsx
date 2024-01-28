import React from "react"

export const ConnectTable = () => {
	return (
		<section className="container mx-auto">
			<div className="flex flex-col m-6">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full align-middle md:px-6 lg:px-8">
						<div className="overflow-hidden border border-gray-200 md:rounded-lg">
							<table className="w-full divide-y divide-gray-200 m-auto">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="w-1/2 px-4 py-3.5 text-sm text-left rtl:text-right text-gray-500 font-bold">
											Centre Incharge
										</th>

										<th
											scope="col"
											className="w-1/2 px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
											Centre Coordinator
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									<tr>
										<td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
											<div>
												<h2 className="font-medium text-gray-800">
													Dr. Nisha Mukund, GM, R&D
												</h2>
											</div>
										</td>
										<td className="px-4 py-4 text-sm whitespace-nowrap">
											<div>
												<h2 className="font-medium text-gray-800">
													Mr. Gaurav Yadav, Senior
													Associate- Life Sciences
												</h2>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

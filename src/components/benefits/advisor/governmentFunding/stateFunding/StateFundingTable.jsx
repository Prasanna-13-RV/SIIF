import React from "react"

export const StateFundingTable = () => {
	return (
		<section className="container mx-auto">
			<div className="flex flex-col m-6">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full align-middle md:px-6 lg:px-8">
						<div className="overflow-hidden ">
							<div className="flex flex-row flex-wrap w-full">
								<table className="w-1/2 divide-y border md:rounded-lg divide-gray-200 m-auto border-gray-200">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="w-1/2 text-center px-4 py-3.5 text-sm rtl:text-right text-gray-500 font-bold"
												colSpan={2}>
												Voucher A
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200 border-gray-200">
										<tr>
											<td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
												<div>
													<h2 className="font-medium text-gray-800">
														Purpose
													</h2>
												</div>
											</td>
											<td className="px-4 py-4 text-sm whitespace-nowrap">
												<div>
													<h2 className="font-medium text-gray-800">
														Entry into Research
													</h2>
												</div>
											</td>
										</tr>
										<tr>
											<td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
												<div>
													<h2 className="font-medium text-gray-800">
														Grant Amount
													</h2>
												</div>
											</td>
											<td className="px-4 py-4 text-sm whitespace-nowrap">
												<div>
													<h2 className="font-medium text-gray-800">
														Upto Rs. 2 Lakhs
													</h2>
												</div>
											</td>
										</tr>
										<tr>
											<td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
												<div>
													<h2 className="font-medium text-gray-800">
														Govt. Contribution
													</h2>
												</div>
											</td>
											<td className="px-4 py-4 text-sm whitespace-nowrap">
												<div>
													<h2 className="font-medium text-gray-800">
														80% of the Project Cost
													</h2>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
								<table className="w-1/2 divide-y border md:rounded-lg divide-gray-200 m-auto border-gray-200">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="w-1/2 text-center px-4 py-3.5 text-sm rtl:text-right text-gray-500 font-bold"
												colSpan={2}>
												Voucher B
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200 border-gray-200">
										<tr>
											<td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
												<div>
													<h2 className="font-medium text-gray-800">
														Purpose
													</h2>
												</div>
											</td>
											<td className="px-4 py-4 text-sm whitespace-nowrap">
												<div>
													<h2 className="font-medium text-gray-800">
														Entry into Research
													</h2>
												</div>
											</td>
										</tr>
										<tr>
											<td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
												<div>
													<h2 className="font-medium text-gray-800">
														Grant Amount
													</h2>
												</div>
											</td>
											<td className="px-4 py-4 text-sm whitespace-nowrap">
												<div>
													<h2 className="font-medium text-gray-800">
														Upto Rs. 5 Lakhs
													</h2>
												</div>
											</td>
										</tr>
										<tr>
											<td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
												<div>
													<h2 className="font-medium text-gray-800">
														Govt. Contribution
													</h2>
												</div>
											</td>
											<td className="px-4 py-4 text-sm whitespace-nowrap">
												<div>
													<h2 className="font-medium text-gray-800">
														50% of the Project Cost
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
			</div>
		</section>
	)
}

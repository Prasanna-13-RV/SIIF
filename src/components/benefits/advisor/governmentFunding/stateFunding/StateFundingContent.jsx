import React from "react"
import { StateFundingTable } from "./StateFundingTable"

export const StateFundingContent = () => {
	return (
		<>
			<div>
				<div className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-4 lg:overflow-visible lg:px-0">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10">
						<div className="lg:mx-auto lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
							<div className="lg:pr-4 w-full">
								<div>
									<h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
										Entrepreneurship Development and
										Innovation Institute (EDII) - Innovation
										Voucher Programme (IVP)
									</h1>
								</div>
							</div>
						</div>
						<div className="lg:mx-auto lg:w-full px-8 flex flex-row flex-wrap">
							<div className="lg:mx-auto  lg:gap-x-8 lg:px-8">
								<div className="text-base leading-7 text-gray-700 ">
									<p className="pt-3">
										The Entrepreneurship Development and
										Innovation Institute (EDII), Chennai is
										an apex organisation in the field of
										entrepreneurship education and
										self-employment promotion in the state
										of Tamil Nadu.
									</p>
									<ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
										<li>Established in 2001</li>
										<li>
											EDII was constituted by Government
											of Tamil Nadu as a not-for- profit
											society and is administered by
											Department of Micro, Small and
											Medium Enterprises (MSME).
										</li>
										<li>
											It is headed by the Director of the
											Institute, EDII is managed under the
											superintendence of a Governing
											Council One of the most prominent
											programmes offered under EDII is the
											Innovation Voucher Programme
										</li>
									</ul>
								</div>
							</div>
							{/* <div className="flex items-center justify-center p-6 mt-8 lg:my-5 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
								<img
									className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
									src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
									alt=""
								/>
							</div> */}
						</div>
						<div className="lg:mx-auto  lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
							<div className="lg:pr-4 w-full">
								<div>
									<h1 className="mt-2 text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">
										Innovation Voucher Programme (IVP)
									</h1>
									<p className="pt-3">
										Innovation Voucher Programme is the
										Tamil Nadu Government's flagship
										grant-in-aid scheme for supporting
										Start-ups and MSMEs.
									</p>
								</div>
								<div>
									<h1 className="mt-2 text-base font-bold tracking-tight text-gray-900 sm:text-lg">
										We aim at:
									</h1>
									<ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
										<li>Established in 2001</li>
										<li>
											Promoting Research and Innovation
											amongst Start-ups and MSMEs
										</li>
										<li>
											Companies working at innovative
											research can avail grant up to Rs.5
											lakhs
										</li>
									</ul>
									<h1 className="mt-2 text-base font-bold tracking-tight text-gray-900 sm:text-lg">
										The IVP programme can be divided into
										two types :
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<StateFundingTable />
			<div className="lg:mx-auto lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 my-3 px-5">
				<h1 className="mt-2 text-base font-bold tracking-tight text-gray-900 sm:text-lg">
					Eligibility Criteria
				</h1>
				<p className="pt-3">
					IVP is open to all manufacturing or service MSME/Startup
					willing to innovate and improve their business. However, the
					following eligibility conditions need to be met:
				</p>
				<ul className="mt-4 space-y-1 text-gray-600 list-disc pl-4">
					<li>Should be a manufacturing MSME/STARTUP</li>
					<li>Be registered and located in Tamil Nadu</li>
					<li>
						Willing to co-finance the innovation investment as per
						IVP norms
					</li>
					<p>
						More details can be viewed from the website:
						https://www.editn.in/pages/view/ivp
					</p>
				</ul>
				<h1 className="mt-2 text-base font-bold tracking-tight text-gray-900 sm:text-lg">
					CIIC IVP Grant Recipients: So far the total beneficiaries
					No. 56, Rs.159.13 lakhs
				</h1>
			</div>
		</>
	)
}

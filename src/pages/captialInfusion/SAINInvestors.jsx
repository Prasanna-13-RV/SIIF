import React from "react"

export const SAINInvestors = () => {
	const data = [{
		title: "Access to High-Potential Start-Ups",
		content: "As a member of RAIN, investors gain exclusiven access to a curated selection of high-potential Start-Ups from various industries. Our rigorous screening process ensures that only the most promising and investable ventures make it to our platform.",
		img:"https://images.livemint.com/img/2022/10/27/1260x709/rupixen-com-5lw6CLBZlCg-unsplash_1639291858917_1666863214393_1666863214393.jpg"
		},

	{
		title: "Diversified Investment Opportunities",
		content: "RAIN offers a diverse range of investment opportunities across sectors, allowing investors to build a well-rounded portfolio. Whether you're interested in technology, healthcare, fintech, or any other sector, our network provides access to Start-Ups from different domains.",
		img:"https://images.unsplash.com/photo-1559067096-49ebca3406aa?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

	},
	{
		title: "Early-stage Investing",
		content: "RAIN focuses on early-stage Start-Ups, giving investors the opportunity to get in on the ground floor of promising ventures. By investing in these early-stage companies, you have the potential for significant returns on investment as they grow and scale.",
		
		img:"https://images.unsplash.com/photo-1554260570-e9689a3418b8?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	}
		,
	{
		title: "Networking and Collaboration",
		content: "RAIN provides a platform for investors to connect and collaborate with like-minded individuals who share a passion support for promising Start-Ups. Our network facilitates valuable networking opportunities, knowledge sharing, and the chance to learn from experienced investors and industry experts.",
		img:"https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

	},
	{
		title: "Hands-on Involvement",
		content: "RAIN you have the opportunity to actively engage with the Start-Ups you invest in. By providing mentorship, guidance, and strategic insights, you can play a pivotal role in shaping the future success of these Start-Ups while leveraging you.",
		img:"https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

	},
	{
		title: "Transparency",
		content: "At RAIN, we prioritize transparency to empower our investors with the information they need. We believe in open communication and strive to provide a transparent investment experience.",
		img:"https://images.unsplash.com/photo-1512099053734-e6767b535838?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

	}]
	return <div className="  mx-auto ">
	<h1 className="py-16 font-bold text-3xl text-center ">SAIN Investors</h1>
	<div className=" w-[90%]  lg:w-[85%] xl:w-[80%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 grid-flow-dense justify-items-center mx-auto  pb-16">
		{data.map((i) => {
			return (
				<div className="h-[400px] shadow-md  rounded-sm">
					<img src={i.img}  className="h-[40%]  w-full object-cover" alt="" />
				<div className="p-3">

				
					<h1 className=" font-bold mb-2">
					{i.title}</h1>
					<p className="">{i.content}
					</p></div></div>
			)
		})}

	</div></div>}
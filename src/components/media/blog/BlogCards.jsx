import React from "react"
import "./BlogSingleCard.css"
import { BlogSingleCard } from "./BlogSingleCard"

export const BlogCards = () => {
	return (
		<section className="flex relative items-center justify-center w-full my-3 mx-auto max-w-screen-xl sm:px-6 lg:flex flex-row flex-wrap lg:items-center lg:px-8">
			<BlogSingleCard
				image={
					"https://aicraise.com/wp-content/uploads/2024/01/Blog-768x384.png"
				}
				title={"Our Partners"}
				description={
					"The Startup lab, an angel network made a stratagic partnership win AIC RAISE. Through this collaboration..."
				}
				link={
					"https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/"
				}
			/>
			<BlogSingleCard
				image={
					"https://aicraise.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-13-at-4.53.35-PM-768x1086.jpeg"
				}
				title={"Delegates"}
				description={
					"AIC Raise recently extended a warm welcome to delegates hailing from diverse educational institutions...."
				}
				link={
					"https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/"
				}
			/>
			<BlogSingleCard
				image={
					"https://aicraise.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-13-at-4.53.35-PM-1-768x1086.jpeg"
				}
				title={"Stupendous Achievement"}
				description={
					"We are thrilled to announce that one of our startup WATTELLO has emerged victorious in securing funding!..."
				}
				link={
					"https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/"
				}
			/>
		</section>
	)
}

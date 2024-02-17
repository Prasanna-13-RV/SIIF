import React from "react"
import { BlogHero } from "../../components/media/blog/BlogHero"
import { BlogCards } from "../../components/media/blog/BlogCards"
import { Helmet } from "react-helmet"

export const Blog = () => {
	return (
		<>
			<Helmet title="Blog | SIIF" />
			<BlogHero />
			<BlogCards />
		</>
	)
}

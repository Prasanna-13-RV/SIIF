import React from "react"
import "./BlogSingleCard.css"

export const BlogSingleCard = ({ image, title, description, link }) => {
	return (
		// <div className="card-grid-space m-3">
		// 	<a
		// 		style={{
		// 			backgroundImage: `url(${image})`,
		// 		}}
		// 		className="card"
		// 		href={link}>
		// 		<div>
		// 			<h1>{title}</h1>
		// 			<p>{description}</p>
		// 		</div>
		// 	</a>
		// </div>
		<article class="card">
			<img
				class="card__background"
				src={image}
				alt={title}
				width="1920"
				height="2193"
			/>
			<div class="card__content | flow">
				<div class="card__content--container | flow">
					<h2 class="card__title">{title}</h2>
					<p class="card__description">
						{description}
					</p>
				</div>
				<a href={link} class="card__button">Read more</a>
			</div>
		</article>
	)
}

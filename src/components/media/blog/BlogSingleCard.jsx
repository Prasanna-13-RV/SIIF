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
		<article className="card">
			<img
				className="card__background"
				src={image}
				alt={title}
				width="1920"
				height="2193"
			/>
			<div className="card__content | flow">
				<div className="card__content--container | flow">
					<h2 className="card__title">{title}</h2>
					<p className="card__description">
						{description}
					</p>
				</div>
				<a href={link} className="card__button">Read more</a>
			</div>
		</article>
	)
}

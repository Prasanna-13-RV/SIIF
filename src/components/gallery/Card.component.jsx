import React from "react"
import { Link } from "react-router-dom"

const Card = ({ gallery }) => {
	return (
		<div class="w-full bg-white flex justify-center items-center object-cover">
			<img class="w-full" src={gallery.image} alt="" />
		</div>
	)
}

export default Card

import React from "react"
import Card from '../../components/gallery/Card.component'

export const Gallery = () => {
	return <div className='px-10 lg:px-14 xl:px-16 my-5 grid grid-cols-3 gap-10'>
		<Card/>
		<Card/>
		<Card/>
		<Card/>
		<Card/>
	</div>
}

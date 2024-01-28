import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const CarouselHero = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	}
	return (
		<div className="h-screen w-full flex justify-center items-center">
			<Carousel
				className="h-[90%] w-[90%] mx-auto"
				swipeable={false}
				draggable={false}
				showDots={true}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				// autoPlay={this.props.deviceType !== "mobile" ? true : false}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				// deviceType={this.props.deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px">
				<div>
					<img
						className="w-full object-cover"
						src="https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
				</div>
				<div>Item 2</div>
				<div>Item 3</div>
				<div>Item 4</div>
			</Carousel>
		</div>
	)
}

export default CarouselHero

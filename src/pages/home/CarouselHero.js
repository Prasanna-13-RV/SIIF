import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Swiper, SwiperSlide } from "swiper/react"

// import slider1 from "../../images/home/slider1.JPG";
// import slider2 from "../../images/home/slider2.JPG";
// import slider3 from "../../images/home/slider3.JPG";
// import slider4 from "../../images/home/slider4.JPG";
// import slider5 from "../../images/home/slider5.jpeg";
// import slider6 from "../../images/home/slider6.jpeg";
// import slider7 from "../../images/home/slider7.jpeg";

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import "./swiper.css"

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"

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
		<div className="h-[45vh] lg:h-screen w-full flex justify-center items-center hero-swiper">
			<Swiper
				cssMode={true}
				navigation={true}
				pagination={true}
				mousewheel={true}
				autoplay={true}
				keyboard={true}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className="h-[90%]   w-[90%] mx-auto">
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/difpe3hca/image/upload/v1708253644/SIIF/IMG_20230614_163203_327_clivig.webp"
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/difpe3hca/image/upload/v1708254305/SIIF/IMG_1420_pftawz.jpg"
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/difpe3hca/image/upload/v1708254160/SIIF/IMG_20230721_140642_rtsal0.jpg"
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/difpe3hca/image/upload/v1708254196/SIIF/IMG_20231031_104932_yqe4kt.jpg"
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/difpe3hca/image/upload/v1708254182/SIIF/IMG_20230721_141728_hessyh.jpg"
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				{/* <SwiperSlide>
					<img
						src={slider2}
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={slider3}
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={slider4}
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={slider5}
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={slider6}
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={slider7}
						alt=""
						className="object-contain "
					/>
				</SwiperSlide> */}
			</Swiper>
		</div>
	)
}

export default CarouselHero

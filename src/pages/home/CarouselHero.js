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
				className="h-[90%] w-[90%] mx-auto">
				<SwiperSlide>
					<video autoPlay controls>
						<source
							src="https://res.cloudinary.com/difpe3hca/video/upload/v1708363391/SIIF/Startup_Maanadu_2024_Montage_Vid_1_1_bmqxil.mp4"
							type="video/mp4"
						/>
					</video>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/difpe3hca/image/upload/v1708354622/SIIF/image_2_espsv1.jpg"
						alt=""
						className="object-contain"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/difpe3hca/image/upload/v1708354590/SIIF/image_10_uaf7do.jpg"
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/difpe3hca/image/upload/v1708354590/SIIF/image_9_umnuby.jpg"
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/difpe3hca/image/upload/v1708354590/SIIF/image_8_tfuk55.jpg"
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/difpe3hca/image/upload/v1708354587/SIIF/image_6_r2fdya.jpg"
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/difpe3hca/image/upload/v1708354586/SIIF/image_4_hka28k.jpg"
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/difpe3hca/image/upload/v1708354582/SIIF/image_1_h39xrn.jpg"
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/difpe3hca/image/upload/v1708354560/SIIF/image_5_c055df.jpg"
						alt=""
						className="object-contain "
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/difpe3hca/image/upload/v1708354542/SIIF/image_3_cqdfnd.jpg"
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

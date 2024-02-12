import React from 'react';
import HeroSection from '../../components/common/Hero/HeroSection';
export const MakerSpace = () => {
	return (
		<>
			 <HeroSection
        image="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg"
        title="MarkerSpace"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nesciunt illo tenetur fuga ducimus numquam ea!"
      />
			<section className='p-4 lg:p-8 my-5'>
				<div className='container mx-auto space-y-12'>
					<div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row'>
						<img
							src='https://source.unsplash.com/640x480/?1'
							alt=''
							className='h-80 aspect-video'
						/>
						<div className='flex flex-col justify-center flex-1 p-6 '>
							{/* <span className="text-xs uppercase ">Join, it's free</span> */}
							<h3 className='text-3xl font-bold'>Makerspace</h3>
							<p className='my-6 '>
								The Makerspace is a collaborative workshop that serves as a hub
								for hands-on experimentation and prototyping. Equipped with an
								array of tools such as 3D printers, laser cutters, woodworking
								equipment, and electronics workstations, the Makerspace empowers
								entrepreneurs to turn their ideas into tangible prototypes and
								products. This facility fosters a vibrant community where
								startups can exchange knowledge, skills, and ideas, fostering
								cross-disciplinary collaboration.
							</p>
							{/* <button type='button' className='self-start'>
								Action
							</button> */}
						</div>
					</div>
					<div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse'>
						<img
							src='https://source.unsplash.com/640x480/?2'
							alt=''
							className='h-80 aspect-video'
						/>
						<div className='flex flex-col justify-center flex-1 p-6 '>
							{/* <span className='text-xs uppercase '>
								Fab Lab
							</span> */}
							<h3 className='text-3xl font-bold'>Fab Lab</h3>
							<p className='my-6 '>
								The Fab Lab (Fabrication Laboratory) takes the concept of rapid
								prototyping to a whole new level. This state-of-the-art facility
								enables startups to explore IoT technologies. We provide access
								to cutting-edge IoT tools, including Raspberry Pi, ThinkSpeak
								(Cloud Platform), Belgium Brown, and Kaa IoT. These resources
								are made readily available to our incubated startups, enabling
								them to ideate, prototype, and innovate with the latest
								technology in the realm of the Internet of Things.
							</p>
							{/* <button type='button' className='self-start'>
								Action
							</button> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export const IncubationProgram = () => {
	return (
		<>
			<Helmet>
				<link href='https://unpkg.com/pattern.css' rel='stylesheet' />
			</Helmet>
			<section className='relative bg-[url(https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg)] bg-cover bg-center bg-no-repeat'>
				<div className='absolute inset-0 sm:bg-transparent sm:from-white/55 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l lg:bg-gradient-to-r'></div>

				<div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
					<h1 className='text-3xl font-extrabold sm:text-5xl text-center w-full'>
						Incubation Programs
						{/* <strong className="block font-extrabold text-blue-700">
							{" "}
							Forever Home.{" "}
						</strong> */}
					</h1>

					<p className='mt-4 max-w-lg sm:text-xl/relaxed'>
						Do You Want To Turn Your Business Idea Into An Investment-Ready
						Enterprise?
					</p>

					{/* <div className="mt-8 flex flex-wrap gap-4 text-center">
						<a
							href="#"
							className="block w-full rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto">
							Get Started
						</a>

						<a
							href="#"
							className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-orange-600 shadow hover:text-orange-700 focus:outline-none focus:ring active:text-orange-500 sm:w-auto">
							Learn More
						</a>
					</div> */}
				</div>
			</section>
			<div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row'>
				<img
					src='https://source.unsplash.com/640x480/?1'
					alt=''
					className='h-80 aspect-video'
				/>
				<div className='flex flex-col justify-center flex-1 p-6 '>
					<span className='text-xs uppercase '>About</span>
					<h3 className='text-3xl font-bold'>Our Incubation Program</h3>
					<p className='my-6 '>
						Startups and first-time entrepreneurs are at the centre of our
						incubation program. Entrepreneurs joining AIC RAISE are provided
						with the best opportunities and knowledge to refine their idea,
						launch their enterprises, grow it into profitable business and
						finally deliver high-impact solutions.
					</p>
					{/* <button type='button' className='self-start'>
								Action
							</button> */}
				</div>
			</div>

			<section class=''>
				<div class='max-w-6xl mx-auto px-5 py-24 '>
					<div class='text-center mb-20'>
						<h1 class=' title-font  mb-4 text-3xl font-extrabold leading-10 tracking-tight sm:leading-none'>
							Our Program Can Best Be Summarized In The Acronym RAISE
						</h1>
						{/* <p class='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
							L'informatique est vaste et les langages naissent presque à tout
							moment, je fais tout mon possible pour être à la hauteur afin de
							répondre au besoin de mes clients et d'apporter de l'aide aux
							nouveaux développeurs.
						</p> */}
						<div class='flex mt-6 justify-center'>
							<div class='w-16 h-1 rounded-full bg-indigo-500 inline-flex'></div>
						</div>
					</div>
					<div class='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 text-white'>
						<div class='p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col '>
							<div class='pattern-dots-md gray-light'>
								<div class='rounded bg-gray-500 p-4 transform translate-x-6 -translate-y-6  '>
									<div class='w-10 h-10 inline-flex items-center justify-center rounded-full  bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2'>
										<svg
											class='w-6 h-6'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
											></path>
										</svg>
									</div>
									<div class='flex-grow '>
										<h2 class=' text-xl title-font font-medium mb-3'>
											Refine and Review
										</h2>
										<p class='leading-relaxed text-sm text-justify'>
											We help you refine your idea to match the market and
											industry demand.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class='p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col '>
							<div class='pattern-dots-md gray-light'>
								<div class='rounded bg-gray-500 p-4 transform translate-x-6 -translate-y-6 '>
									<div class='w-10 h-10 inline-flex items-center justify-center rounded-full  bg-blue-100 text-blue-500 mb-5 flex-shrink-0'>
										<svg
											class='w-6 h-6'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
											></path>
										</svg>
									</div>
									<div class='flex-grow'>
										<h2 class=' text-xl title-font font-medium mb-3'>
											Accelerate
										</h2>
										<p class='leading-relaxed text-sm text-justify'>
											We increase the scope, extent and rate of execution of
											your idea.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class='p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col '>
							<div class='pattern-dots-md gray-light'>
								<div class='rounded bg-gray-500 p-4 transform translate-x-6 -translate-y-6 '>
									<div class='w-10 h-10 inline-flex items-center justify-center rounded-full  bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0'>
										<svg
											class='w-6 h-6'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
											></path>
										</svg>
									</div>
									<div class='flex-grow'>
										<h2 class=' text-xl title-font font-medium mb-3'>
											Scale-Up
										</h2>
										<p class='leading-relaxed text-sm text-justify'>
											We Expand (increase in size and number) your business
											idea.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class='p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col '>
							<div class='pattern-dots-md gray-light'>
								<div class='rounded bg-gray-500 p-4 transform translate-x-6 -translate-y-6 '>
									<div class='w-10 h-10 inline-flex items-center justify-center rounded-full  bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0'>
										<svg
											class='w-6 h-6'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
											></path>
										</svg>
									</div>
									<div class='flex-grow'>
										<h2 class=' text-xl title-font font-medium mb-3'>
											Incubate
										</h2>
										<p class='leading-relaxed text-sm text-justify'>
											We brood over your idea and bring it to hatching. We give
											support and aid the development of your idea.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class='p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col '>
							<div class='pattern-dots-md gray-light'>
								<div class='rounded bg-gray-500 p-4 transform translate-x-6 -translate-y-6 '>
									<div class='w-10 h-10 inline-flex items-center justify-center rounded-full  bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0'>
										<svg
											class='w-6 h-6'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
											></path>
										</svg>
									</div>
									<div class='flex-grow'>
										<h2 class=' text-xl title-font font-medium mb-3'>
											Evaluate
										</h2>
										<p class='leading-relaxed text-sm text-justify'>
											We assess the development of your business and advice
											accordingly.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className=''>
				<div className='container max-w-5xl px-4 py-12 mx-auto'>
					<div className='grid gap-4 mx-4 sm:grid-cols-12'>
						<div className='col-span-12 sm:col-span-3'>
							<div className='text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:translate-x-1/2 before:bg-violet-400'>
								<h3 className='text-3xl font-semibold'>
									Our Selection Process
								</h3>
								{/* <span className='text-sm font-bold tracki uppercase dark:text-gray-400'>
									Vestibulum diam nunc
								</span> */}
							</div>
						</div>
						<div className='relative col-span-12 px-4 space-y-6 sm:col-span-9'>
							<div className='col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700'>
								<div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:-translate-x-2 before:bg-violet-400'>
									<h3 className='text-xl font-semibold tracki'>Personality </h3>
									{/* <time className='text-xs tracki uppercase dark:text-gray-400'>
										Dec 2020
									</time> */}
									<p className='mt-3'>
										We look out for individuals who are passionate about
										entrepreneurship. They should show unwavering commitment to
										community development and positive change. Individuals who
										have the ability to mobilize support and resources for their
										work.
									</p>
								</div>
								<div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:-translate-x-2 before:bg-violet-400'>
									<h3 className='text-xl font-semibold tracki'>
										Willingness to Learn
									</h3>
									{/* <time className='text-xs tracki uppercase dark:text-gray-400'>
										Jul 2019
									</time> */}
									<p className='mt-3'>
										We are out on the lookout for individuals who are open to
										learning and gaining new ideas. Individuals who will take
										feedback and criticisms positively and work on it to better
										themselves and their projects.
									</p>
								</div>
								<div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:-translate-x-2 before:bg-violet-400'>
									<h3 className='text-xl font-semibold tracki'>Incubation </h3>
									{/* <time className='text-xs tracki uppercase dark:text-gray-400'>
										Jan 2016
									</time> */}
									<p className='mt-3'>
										We look for individuals who are open to feedback and can
										gain from our non-financial support.
									</p>
								</div>
								<div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:-translate-x-2 before:bg-violet-400'>
									<h3 className='text-xl font-semibold tracki'>
										Strength and workability{' '}
									</h3>
									{/* <time className='text-xs tracki uppercase dark:text-gray-400'>
										Jan 2016
									</time> */}
									<p className='mt-3'>
										The idea you present on the table should be workable and
										executable. It should be focused on solving a particular
										social or economic problem or a need that is not met in the
										society.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class='text-center mb-20'>
					<h1 class=' title-font  mb-4 text-3xl font-extrabold leading-10 tracking-tight sm:leading-none'>
						What Is Life Like At AIC RAISE Incubation Centre?
					</h1>
					<p class='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
						Our incubation programs are structured to give an all-round growth
						with specific emphasis on venture growth and corporate management
						leadership.
					</p>
					<div class='flex mt-6 justify-center'>
						<div class='w-16 h-1 rounded-full bg-indigo-500 inline-flex'></div>
					</div>
				</div>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 lg:px-14 xl:px-16'>
					{data.map((d, i) => {
						return (
							<div class='w-full bg-white border border-gray-200 rounded-lg shadow '>
								<img class='rounded-t-lg w-full' src={d.img} alt='' />
								<div class='p-3'>
									<p class='mb-3 font-normal text-gray-700 '>{d.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<section className='py-6 bg-gray-400 mt-4 mx-10 lg:mx-14 xl:mx-16'>
				<div className='text-white container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between'>
					<div>
						<h1 className='text-2xl font-semibold leading lg:text-left'>
							Be a catalyst for social change.
						</h1>
					</div>
					<Link to='/apply-now'>
						<button className='px-8 py-3 text-lg font-semibold rounded bg-purple-600 w-fit'>
							Apply Now
						</button>
					</Link>
				</div>
			</section>
		</>
	);
};
const data = [
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU',
		description:
			'Induction to community: You will be introduced to a stimulating environment that gives you the chance to get to know other entrepreneurs, develop your ideas, and be influenced by peers who would lend you deeper insights.'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU',
		description:
			'We are on the lookout for individuals who are open to learning and gaining new ideas. Individuals who will take feedback and criticisms positively and work on it to better themselves and their projects.'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU',
		description:
			'We look for individuals who are open to feedback and can gain from our non-financial support.'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU',
		description:
			'The idea you present on the table should be workable and executable. It should be focused on solving a particular social or economic problem or a need that is not met in society.'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU',
		description:
			'Our incubation programs are structured to give all-round growth with specific emphasis on venture growth and corporate management leadership.'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU',
		description:
			'Induction to community: You will be introduced to a stimulating environment that gives you the chance to get to know other entrepreneurs, develop your ideas, and be influenced by peers who would lend you deeper insights.'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU',
		description:
			'Goal Setting: Our team will work with you to set your goals, dreams, and milestones that you need to achieve as well as the plan of how to achieve them.'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU',
		description:
			'Personal instructor: You will get a chance to work with a coach on developing your abilities, potentials, relationship and communication with other team members, and decision-making skills.'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU',
		description:
			'Location surveillance: Our team will visit with you to the site of your venture setup and see how and to what extent your project is applicable in the real world.'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU',
		description:
			'Effect assessment: We will work with you to evaluate your ideas not only on the basis of profits but also on the basis of the impact they leave on society.'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU',
		description:
			'Connecting to and building a network: You will Connect, contact, and get to know experts and investors from different sectors and get to work with them.'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU',
		description:
			'Funding: Our team will not only give you the required seed capital but also teach you how to manage your funds to turn your ideas into reality.'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU',
		description:
			'Entrepreneurs retreat: We will take you on an entrepreneur retreat for you to learn from other players in the industry how to develop your leadership skills and take your venture to the next level with your team.'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU',
		description:
			'Training workshops: You will get a chance to hear from more experienced entrepreneurs and gain experience and insights in various domains from marketing to finance and strategies.'
	}
];

import React from 'react';
import { Link } from 'react-router-dom';

export const PreIncubationProgram = () => {
	return (
		<div className='px-10 lg:px-14 xl:px-16'>
			<div class=''>
				<h1 class='text-4xl font-medium text-gray-700 text-center mt-6'>
					Program In Brieforama
				</h1>
				<p class='text-center mt-6 text-lg font-light 0'>
					We the AIC Raise Business Incubator, Facilitating Tech Startups by
					nurturing your Idea into a Prototype with our Pre Incubation Program
					entitled “Tech Catalysts”. The Program is designed exclusively for
					those who dare to dream and aspire to change the world through
					technology. Whether you’re a student with a revolutionary concept or
					an early-stage entrepreneur looking to take your startup to new
					heights, our program is your launchpad to success. For the following
					nine weeks, the startups will be inducted and trained on the
					essentials of entrepreneurship. Upon graduation from the 9 weeks
					program startups will receive a certificate and successful startups
					will be selected for long-term incubation at the AIC RAISE incubator
					for an additional 6 months.
				</p>
			</div>
			<div class='px-10 lg:px-14 xl:px-16'>
				<h1 class='text-4xl font-medium text-gray-700 text-center mt-6'>
					Sector Spotlight
				</h1>
				<div class='p-8 grid grid-cols-3 gap-5 place-items-center'>
					<Card title='Deep Tech' />
					<Card title='Health & Med Tech' />
					<Card title='Food Tech' />
					<Card title='Green Tech' />
					<Card title='Climate Tech' />
					<Card title='Energy Tech' />
				</div>
			</div>
			<section className=''>
				<div className='container mapy-12 mx-auto space-y-24 '>
					{/* <div>
			<h2 className="text-3xl font-bold tracki text-center sm:text-5xl">Aliquip definiebas ad est</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center ">Quando cetero his ne, eum admodum sapientem ut.</p>
		</div> */}
					<div className='grid lg:gap-8 lg:grid-cols-2 lg:items-center'>
						<div>
							<h3 className='text-2xl font-bold tracki sm:text-3xl'>
								Who are we looking for
							</h3>
							{/* <p className="mt-3 text-lg ">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p> */}
							<div className='mt-12 space-y-3'>
								<div className='flex'>
									<div className='flex-shrink-0'>
										<div className='flex items-center justify-center w-12 h-12 rounded-md '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												className='w-7 h-7'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M5 13l4 4L19 7'
												></path>
											</svg>
										</div>
									</div>
									<div className='ml-4'>
										{/* <h4 className="text-lg font-medium leadi">Per ei quaeque sensibus</h4> */}
										<p className='mt-2 '>
											Startups with tech-oriented concepts or products related
											to one of the specified sectors i.e., Deep Tech, Health &
											Med Tech, Food Tech, Green Tech, Climate Tech and Energy
											Tech.
										</p>
									</div>
								</div>
								<div className='flex'>
									<div className='flex-shrink-0'>
										<div className='flex items-center justify-center w-12 h-12 rounded-md '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												className='w-7 h-7'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M5 13l4 4L19 7'
												></path>
											</svg>
										</div>
									</div>
									<div className='ml-4'>
										{/* <h4 className="text-lg font-medium leadi">Cu imperdiet posidonium sed</h4> */}
										<p className='mt-2 '>
											A clear and well-defined business idea or concept should
											be in place, with evidence of initial validation such as
											market research or a POC.
										</p>
									</div>
								</div>
								<div className='flex'>
									<div className='flex-shrink-0'>
										<div className='flex items-center justify-center w-12 h-12 rounded-md '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												className='w-7 h-7'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M5 13l4 4L19 7'
												></path>
											</svg>
										</div>
									</div>
									<div className='ml-4'>
										{/* <h4 className="text-lg font-medium leadi">Nulla omittam sadipscing mel ne</h4> */}
										<p className='mt-2 '>
											A clear identification and understanding of the problem
											the startup aims to solve within their chosen sector.
										</p>
									</div>
								</div>
								<div className='flex'>
									<div className='flex-shrink-0'>
										<div className='flex items-center justify-center w-12 h-12 rounded-md '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												className='w-7 h-7'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M5 13l4 4L19 7'
												></path>
											</svg>
										</div>
									</div>
									<div className='ml-4'>
										{/* <h4 className="text-lg font-medium leadi">Cibo augue offendit has ad</h4> */}
										<p className='mt-2 '>
											Startups either in the early stages of development or led
											by students from a recognized educational institution
										</p>
									</div>
								</div>
								<div className='flex'>
									<div className='flex-shrink-0'>
										<div className='flex items-center justify-center w-12 h-12 rounded-md '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												className='w-7 h-7'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M5 13l4 4L19 7'
												></path>
											</svg>
										</div>
									</div>
									<div className='ml-4'>
										{/* <h4 className="text-lg font-medium leadi">At eum ferri luptatum lobortis</h4> */}
										<p className='mt-2 '>
											For Green Tech, Climate Tech, and Energy Tech startups,
											their potential to have a positive impact on society and
											the environment may be an important criterion.
										</p>
									</div>
								</div>
								<div className='flex'>
									<div className='flex-shrink-0'>
										<div className='flex items-center justify-center w-12 h-12 rounded-md '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												className='w-7 h-7'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M5 13l4 4L19 7'
												></path>
											</svg>
										</div>
									</div>
									<div className='ml-4'>
										<h4 className='text-lg font-medium leadi'>
											Dicunt verterem evertitur eu sea
										</h4>
										<p className='mt-2 '>
											The startup idea should have the potential for scalability
											and growth.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div aria-hidden='true' className='mt-10 lg:mt-0'>
							<img
								src='https://source.unsplash.com/random/360x480'
								alt=''
								className='mx-auto rounded-lg shadow-lg '
							/>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class=' py-8'>
					<div class='container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24'>
						<div class='flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8'>
							<p class='ml-2 text-yellow-300 uppercase tracking-loose'>
								Working Process
							</p>
							<p class='text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2'>
								Working Process of Fest
							</p>
							<p class='text-sm md:text-base  mb-4'>
								Here’s your guide to the tech fest 2021 process. Go through all
								the steps to know the exact process of the fest.
							</p>
							<Link
								to='#'
								class='bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent'
							>
								Explore Now
							</Link>
						</div>
						<div class='ml-0 md:ml-12 lg:w-2/3 sticky'>
							<div class='container mx-auto w-full h-full'>
								<div class='relative wrap overflow-hidden p-10 h-full'>
									<div
										class='border-2-2 border-yellow-555 absolute h-full border'
										style={{right: '50%',border: '2px solid #FFC100', borderRadius: '1%;'}}
									></div>
									<div
										class='border-2-2 border-yellow-555 absolute h-full border'
										style={{left: '50%',border: '2px solid #FFC100', borderRadius: '1%;'}}
									></div>
									<div class='mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline'>
										<div class='order-1 w-5/12'></div>
										<div class='order-1 w-5/12 px-1 py-4 text-right'>
											<p class='mb-3 text-base text-yellow-300'>
												1-6 May, 2021
											</p>
											<h4 class='mb-3 font-bold text-lg md:text-2xl'>
												Registration
											</h4>
											<p class='text-sm md:text-base leading-snug  text-opacity-100'>
												Pick your favourite event(s) and register in that event
												by filling the form corresponding to that event. Its
												that easy :)
											</p>
										</div>
									</div>
									<div class='mb-8 flex justify-between items-center w-full right-timeline'>
										<div class='order-1 w-5/12'></div>
										<div class='order-1  w-5/12 px-1 py-4 text-left'>
											<p class='mb-3 text-base text-yellow-300'>
												6-9 May, 2021
											</p>
											<h4 class='mb-3 font-bold text-lg md:text-2xl'>
												Participation
											</h4>
											<p class='text-sm md:text-base leading-snug  text-opacity-100'>
												Participate online. The links for your registered events
												will be sent to you via email and whatsapp groups. Use
												those links and show your talent.
											</p>
										</div>
									</div>
									<div class='mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline'>
										<div class='order-1 w-5/12'></div>
										<div class='order-1 w-5/12 px-1 py-4 text-right'>
											<p class='mb-3 text-base text-yellow-300'>
												{' '}
												10 May, 2021
											</p>
											<h4 class='mb-3 font-bold text-lg md:text-2xl'>
												Result Declaration
											</h4>
											<p class='text-sm md:text-base leading-snug  text-opacity-100'>
												The ultimate genius will be revealed by our judging
												panel on 10th May, 2021 and the resukts will be
												announced on the whatsapp groups and will be mailed to
												you.
											</p>
										</div>
									</div>

									<div class='mb-8 flex justify-between items-center w-full right-timeline'>
										<div class='order-1 w-5/12'></div>

										<div class='order-1  w-5/12 px-1 py-4'>
											<p class='mb-3 text-base text-yellow-300'>12 May, 2021</p>
											<h4 class='mb-3 font-bold  text-lg md:text-2xl text-left'>
												Prize Distribution
											</h4>
											<p class='text-sm md:text-base leading-snug  text-opacity-100'>
												The winners will be contacted by our team for their
												addresses and the winning goodies will be sent at their
												addresses.
											</p>
										</div>
									</div>
								</div>
								<img
									class='mx-auto -mt-36 md:-mt-36'
									src='https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

const Card = ({ title }) => {
	return (
		<div class=' h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl'>
			<svg class='h-14' viewBox='0 0 177 171'>
				<ellipse cx='107' cy='122' rx='53.6' ry='49.2' fill='#fab529' />
				<g fill='none' stroke='#000' stroke-linecap='round' stroke-width='4.2'>
					<path d='m88.4 83.8c-13.3 19.7-11.3 35.6-3.21 53.6' />
					<path d='m14.8 114c6.49 15.1 14.3 28.3 31.3 28.7' />
					<path d='m121 165c38.5 8.41 56.2-30.2 54.6-52.5-1.64-22.3-14.4-57.2-55.1-46.4' />
					<path d='m120 165c-38.5 8.41-56.2-30.2-54.6-52.5 1.64-22.3 14.4-57.2 55.1-46.4' />
					<path d='m115 41.6v-9.2c0-2.47 1.99-4.46 4.46-4.46s4.46 1.99 4.46 4.46v13.4' />
					<path d='m151 31.1c-8.19 1.34-15.3-0.291-30.2 19.2v15.7c9.29 3.53 27.7-20.4 30.2-34.9z' />
					<path d='m90 29.3c15.6-0.0918 24 9.29 30.7 21v15.7c-11-8.01-23.6-7.92-30.7-36.7z' />
					<path d='m24.9 10.4c3.42-3.09 7.43-4.06 11.6-4.53' />
					<path d='m32.3 26.2c-1.82-6.37-8.48-18-14.5-22.9-4.07-0.39-6.34 0.218-7.8 5.05 7.73 7.54 10.5 13.7 14.8 21.7' />
					<path d='m82.3 25.6c-15.1 0.422-35.4-4.06-45.8-19.7 25.7-13.6 40.8 7.28 45.8 19.7z' />
					<path d='m66.9 16.2c-9.8-7.37-19.9-11.1-30.4-10.4' />
					<path d='m64.6 152c-26.2 20.7-65.7-16.3-63-46.1 1.33-14.5 6.37-22.5 9.58-27.5s1.06-10.1 1.65-10.2c-3.12-17.6-0.924-34.1 18-40' />
					<path d='m64.6 152c33 4.8 48.8-47 31.5-71.4-8.39-11.9-16.8-16.3-22-19-5.24-2.65-5.95-8.19-6.54-8.03-6.11-16.8-17.4-29.7-36.7-25.4' />
				</g>
			</svg>
			<span class='mt-6 text-sm ?leading-5 font-semibold text-center'>
				{title}
			</span>
		</div>
	);
};

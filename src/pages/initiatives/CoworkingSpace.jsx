import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/common/Hero/HeroSection';

export const CoworkingSpace = () => {
	return (
		<>
			<HeroSection
				title='Workspaces with more than just free wifi'
				desc='We know you need more than just free wifi and workdesks to build
				your startup and business. We are here to deliver on that.'
				image='https://t4.ftcdn.net/jpg/03/54/00/91/240_F_354009182_Cc6DzlgU402u1bXAGyvXAbmp5EgYAV9D.jpg'
			/>
			{/* <section class='bg-gray-50'>
				<div class='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
					<div class='mx-auto max-w-xl text-center'>
						<h1 class='text-3xl font-extrabold sm:text-4xl'>
							Workspaces with more than
							<strong class='font-extrabold text-red-700 sm:block'>
								just free wifi
							</strong>
						</h1>

						<p class='mt-4 sm:text-xl/relaxed'>
							We know you need more than just free wifi and workdesks to build
							your startup and business. We are here to deliver on that.
						</p>

						<div class='mt-8 flex flex-wrap justify-center gap-4'>
							<Link
								class='block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
								href='/apply/technopreneur'
							>
								Let's Cowork
							</Link>
						</div>
					</div>
				</div>
			</section> */}
			<section className='px-10 lg:px-14 xl:px-16 text-center'>
				<h1 class='text-3xl font-extrabold sm:text-4xl'>
					Co-working offerings{' '}
				</h1>

				<p class='mt-4 sm:text-xl/relaxed'>
					In addition to All-Day access, Free Wifi, Power Backup, a workspace in
					a prime location at the heart of the city, you get access to our
					Resources (Fundings, Investor Connect, Mentor Connect, etc.)
				</p>

				<div className='grid grid-cols-3 gap-5'>
					<Card
						img={
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU'
						}
						title={'Pocket-friendly workspace in heart of the city'}
					/>
					<Card
						img={
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU'
						}
						title={'Invites to startup events'}
					/>
					<Card
						img={
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU'
						}
						title={'24/7, Free Wifi and power backup'}
					/>
					<Card
						img={
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU'
						}
						title={'Connect with startup communities'}
					/>
					<Card
						img={
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnO-v5vKBqcZr5qj6WxEiYk1GLmeCTGu8AA&usqp=CAU'
						}
						title={'Investor & Mentor connects'}
					/>
				</div>
			</section>

			<section className='py-6 bg-gray-400 mt-4 mx-10 lg:mx-14 xl:mx-16'>
				<div className='text-white container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between'>
					<div>
						<h1 className='text-2xl font-semibold leading lg:text-left'>
							Coworking Space
						</h1>
						<p>
							The coworking space at Anna Incubator is thoughtfully designed and
							provides top tier facilities.
						</p>
					</div>
					<Link to='/apply/technopreneur'>
						<button className='px-8 py-3 text-lg font-semibold rounded bg-purple-600 w-fit'>
							Let's Cowork
						</button>
					</Link>
				</div>
			</section>
		</>
	);
};

const Card = ({ img, icon, title }) => {
	return (
		<div className='relative'>
			<div className='relative w-full h-48 after:absolute after:w-full after:h-full after:content-[""] after:bg-black after:opacity-30 after:top-0 after:left-0'>
				<img src={img} alt='' className='absolute w-full h-full object-cover' />
			</div>
			<h1 className='absolute bottom-0 left-0 text-white p-3 text-lg font-bold'>
				{title}
			</h1>
		</div>
	);
};

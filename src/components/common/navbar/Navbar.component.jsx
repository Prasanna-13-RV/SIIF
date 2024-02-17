import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.style.css';

const navItems = [
	{
		title: 'Home',
		link: '/',
		subItems: []
	},
	{
		title: 'About',
		link: '',
		subItems: [
			{
				title: 'Advisory Board ',
				link: '/about/advisoryboard',
				subItems: []
			},
			{
				title: 'Startups ',
				link: '/about/startups',
				subItems: []
			},
			{
				title: 'Teams',
				link: '/about/teams',
				subItems: []
			},
			{
				title: 'Partners ',
				link: '/about/partners',
				subItems: []
			},
			{
				title: 'Mentors',
				link: '/about/mentors',
				subItems: []
			},
			{
				title: 'Virtual Tour',
				link: '/about/virtualtour',
				subItems: []
			}
		]
	},
	{
		title: 'Initiatives',
		link: '',
		subItems: [
			{
				title: 'IP Support',
				link: '/initiatives/ipsupport',
				subItems: []
			},
			{
				title: 'Innovation Entrepreneurship and Venture Management',
				link: '/initiatives/entrepreneurship',
				subItems: []
			},
			{
				title: 'Igniting Young Minds',
				link: '/initiatives/youngminds',
				subItems: []
			},
			{
				title: 'Pre Incubation Program',
				link: '/initiatives/preincubationprogram',
				subItems: []
			},
			{
				title: 'Makerspace ',
				link: '/initiatives/makerspace',
				subItems: []
			},
			{
				title: 'Incubation Programs ',
				link: '/initiatives/incubationprogram',
				subItems: []
			},
			{
				title: 'Coworking space ',
				link: '/initiatives/coworkingspace',
				subItems: []
			},
			{
				title: 'Centers ',
				link: '',
				subItems: [
					{
						title: 'Mobility and Transportation ',
						link: '/center/mobilitytransportation',
						subItems: []
					},
					{
						title: 'Renewable Energy ',
						link: '/center/renewableenergy',
						subItems: []
					}
				]
			},
			{
				title: 'Institution Incubation Acceleration ',
				link: '/initiatives/incubationacceleration',
				subItems: []
			},
			{
				title: 'Institutional Industrial Collaboration ',
				link: '/initiatives/incubationcollaboration',
				subItems: []
			}
		]
	},
	{
		title: 'Events',
		link: '',
		subItems: [
			{
				title: 'Upcoming Events',
				link: '/events/upcomingevents',
				subItems: []
			},
			{
				title: 'Past Events',
				link: '/events/previousevents',
				subItems: []
			}
		]
	},
	{
		title: 'Gallery',
		link: '/gallery',
		subItems: []
	},
	{
		title: 'More',
		link: '',
		subItems: [
			{
				title: 'Benefits',
				link: '',
				subItems: [
					{
						title: 'Capital',
						link: '',
						subItems: [
							{
								title: 'Clinic',
								link: '/benefits/clinic',
								subItems: []
							},
							{
								title: 'Connect',
								link: '/benefits/connect',
								subItems: []
							}
						]
					},
					{
						title: 'Advisor',
						link: '/benefits/advisor',
						subItems: [
							{
								title: 'State',
								link: '/benefits/governmentfunding/state',
								subItems: []
							},
							{
								title: 'Central',
								link: '/benefits/governmentfunding/central',
								subItems: []
							}
						]
					},
					{
						title: 'Trade',
						link: '/benefits/trade',
						subItems: [
							{
								title: 'Global Connect',
								link: '/benefits/trade/globalconnect',
								subItems: []
							},
							{
								title: 'Demoday',
								link: '/benefits/trade/demoday',
								subItems: []
							},
							{
								title: 'Launchpad',
								link: '/benefits/trade/launchpad',
								subItems: []
							},
							{
								title: 'Startup Tools',
								link: '/benefits/trade/startuptools',
								subItems: []
							}
						]
					}
				]
			},
			{
				title: 'Media',
				link: '',
				subItems: [
					{
						title: 'Blog ',
						link: '/media/blog',
						subItems: []
					},
					{
						title: 'Annual Report',
						link: '/media/annualreport',
						subItems: []
					},
					{
						title: 'Media Presence',
						link: '/media/mediapresence',
						subItems: []
					}
				]
			},
			{
				title: 'Capital Infusion',
				link: '',
				subItems: [
					{
						title: 'SAIN Investors',
						link: '/infusion/investors',
						subItems: []
					},
					{
						title: 'SAIN Startups',
						link: '/infusion/startups',
						subItems: []
					},
					{
						title: 'Services',
						link: '/infusion/services',
						subItems: []
					}
				]
			}
		]
	}
];

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isApplyNowOpen, setIsApplyNowOpen] = useState(false);
	const navRef = useRef(null);
	return (
		<>
			<header className='bg-white shadow-lg h-24 hidden md:flex relative z-10'>
				<Link
					to=''
					className='flex-shrink-0 flex items-center justify-center pl-10 lg:pl-14 xl:pl-16'
				>
					<img className='w-24' src='../../logo.png' alt='' />
				</Link>
				<nav className='header-links contents font-semibold text-base lg:text-lg'>
					<ul className='flex items-center ml-4 xl:ml-8 mr-auto min-w-52'>
						{navItems.map((navItem, i) => (
							<NavItem item={navItem} />
						))}
					</ul>
				</nav>

				{/* <nav className='hidden xl:contents'>
				<ul className='flex items-center mr-4 lg:mr-6 xl:mr-8'>
					<li className='p-1'>
						<Link
							to=''
							className='inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5'
						>
							<svg
								className='h-4'
								aria-hidden='true'
								focusable='false'
								data-prefix='fab'
								data-icon='facebook-f'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 320 512'
							>
								<path
									fill='currentColor'
									d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
								></path>
							</svg>
						</Link>
					</li>
					<li className='p-1'>
						<Link
							to=''
							className='inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5'
						>
							<svg
								className='h-4'
								aria-hidden='true'
								focusable='false'
								data-prefix='fab'
								data-icon='linkedin-in'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<path
									fill='currentColor'
									d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
								></path>
							</svg>
						</Link>
					</li>
					<li className='p-1'>
						<Link
							to=''
							className='inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5'
						>
							<svg
								className='h-4'
								aria-hidden='true'
								focusable='false'
								data-prefix='fab'
								data-icon='instagram'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<path
									fill='currentColor'
									d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
								></path>
							</svg>
						</Link>
					</li>
				</ul>
			</nav> */}
				<div className='flex items-center pr-10 lg:pr-14 xl:pr-16'>
					{/* <Link to='' className='mr-4 lg:mr-6 xl:mr-8'>
					<svg
						className='h-6 xl:h-8'
						aria-hidden='true'
						focusable='false'
						data-prefix='far'
						data-icon='search'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 512'
					>
						<path
							fill='currentColor'
							d='M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z'
						></path>
					</svg>
				</Link> */}
					<div class='dropdown inline-block relative'>
						<button class='bg-black text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
							<span class='mr-1'>Apply Now</span>
							<svg
								class='fill-current h-4 w-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
							>
								<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
							</svg>
						</button>
						<ul class='dropdown-menu absolute hidden text-black pt-1'>
							<li class=''>
								<Link
									class='rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
									to='apply/student'
								>
									As Student
								</Link>
							</li>
							<li class=''>
								<Link
									class='rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
									to='apply/mentor'
								>
									As Mentor
								</Link>
							</li>
							<li class=''>
								<Link
									class='rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
									to='apply/faculty'
								>
									As Faculty
								</Link>
							</li>
							<li class=''>
								<Link
									class='bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
									to='apply/technopreneur'
								>
									Become a Technopreneur
								</Link>
								
							</li>
						</ul>
					</div>
				</div>
			</header>
			<nav class='min-h-20 flex border-b md:shadow-lg items-center md:hidden  fixed top-0 left-0 right-0 z-[1000] bg-white px-10 lg:px-14 xl:px-16'>
				<Link
					to=''
					className='flex-shrink-0 flex items-center justify-center pl-10 lg:pl-14 xl:pl-16'
				>
					<img className='w-24' src='../../logo.png' alt='' />
				</Link>
				<ul
					class='md:px-2 ml-auto visible bg-white z-[1000] md:hidden md:space-x-2 absolute md:relative top-full left-0 right-0 '
					ref={navRef}
				>
					{navItems.map((navItem, i) => (
						<NavItemMob item={navItem} key={i} />
					))}
				</ul>
				<div
					class='ml-auto md:hidden text-gray-500 cursor-pointer'
					onClick={() => {
						setIsNavOpen(!isNavOpen);
						if (!isNavOpen) {
							navRef.current.classList.remove('hidden');
							navRef.current.classList.add('visible');
						} else {
							navRef.current.classList.remove('visible');
							navRef.current.classList.add('hidden');
						}
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class={`w-5 h-5 fill-current ${!isNavOpen && 'hidden'}`}
						viewBox='0 0 24 24'
					>
						<path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class={`w-5 h-5 fill-current ${isNavOpen && 'hidden'}`}
						viewBox='0 0 24 24'
						fill='none'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z'
							fill='#000000'
						/>
					</svg>
				</div>
			</nav>
		</>
	);
};

const NavItem = ({ item }) => {
	return item.subItems.length <= 0 ? (
		<li className='p-3 xl:p-6'>
			<Link to={item.link}>
				<span>{item.title}</span>
			</Link>
		</li>
	) : (
		<NavItemDropdown item={item} />
	);
};

const NavItemDropdown = ({ item }) => {
	const [isHidden, setIsHidden] = useState(true);

	return item.subItems.length <= 0 ? (
		<li className='py-0 px-3 xl:p-6 w-full'>
			<Link to={item.link}>
				<span>{item.title}</span>
			</Link>
		</li>
	) : (
		<li
			className='p-3 relative'
			onMouseEnter={() => setIsHidden(false)}
			onMouseLeave={() => setIsHidden(true)}
		>
			<span className='absolute flex items-center cursor-pointer'>
				{item.title}{' '}
				<svg
					className='w-4 h-4 ml-1'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
						clip-rule='evenodd'
					></path>
				</svg>
			</span>
			<div className='top-0 absolute'>
				<button
					id='dropdownNavbarLink'
					data-dropdown-toggle='dropdownNavbar'
					className='opacity-0 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto'
				>
					{item.title}
					<svg
						className='w-4 h-4 ml-1'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
							clip-rule='evenodd'
						></path>
					</svg>
				</button>
				<div
					id='dropdownNavbar'
					className={`${
						isHidden && 'hidden'
					} bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 `}
				>
					<ul className='py-1 min-w-52' aria-labelledby='dropdownLargeButton'>
						{item.subItems.map((item, i) => {
							return (
								<li key={i}>
									<Link
										to={item.link}
										className='text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2'
									>
										{item.title}
									</Link>
									<div className='ml-6 border-l-2'>
										{item.subItems.length > 0 &&
											item.subItems.map((item, i) => (
												<li key={i}>
													<Link
														to={item.link}
														className='text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2'
													>
														{item.title}
													</Link>
													<div className='ml-6 border-l-2'>
														{item.subItems.length > 0 &&
															item.subItems.map((item, i) => (
																<li key={i}>
																	<Link
																		to={item.link}
																		className='text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2'
																	>
																		{item.title}
																	</Link>
																</li>
																// <NavItemDropdown item={item}/>
															))}
													</div>
												</li>
												// <NavItemDropdown item={item}/>
											))}
									</div>
								</li>
								// <NavItemDropdown item={item}/>
							);
						})}
					</ul>
				</div>
			</div>
		</li>
	);
};
const NavItemMob = ({ item }) => {
	return (
		<li className={`relative  ${item.subItems.length > 0 && 'parent'}`}>
			<Link
				to={item.link}
				class={`flex justify-between md:inline-flex px-4 py-2 w-full items-center bg-white hover:bg-gray-50 space-x-2 `}
			>
				{item.title}
				{'  '}
				{item.subItems.length > 0 && (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='w-4 h-4 fill-current pt-1'
						viewBox='0 0 24 24'
					>
						<path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
					</svg>
				)}
			</Link>
			{item.subItems.length > 0 && (
				<ul class='child w-full transition duration-300 md:absolute top-full right-0 md:w-48 bg-gray-200 z-[100] md:shadow-lg md:rounded-b overflow-y-scroll'>
					{item.subItems.map((si, i) => {
						return <NavItemMob item={si} key={i} />;
					})}
				</ul>
			)}
		</li>
	);
};

export default Navbar;

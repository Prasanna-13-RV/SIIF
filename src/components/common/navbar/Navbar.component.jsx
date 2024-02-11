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
				link: '/centers',
				subItems: [
					// {
					// 	title: 'Mobility and Transportation ',
					// 	link: '/center/mobilitytransportation',
					// 	subItems: []
					// },
					// {
					// 	title: 'Renewable Energy ',
					// 	link: '/center/renewableenergy',
					// 	subItems: []
					// }
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
					// {
					// 	title: 'Capital',
					// 	link: '/benefits/capital',
					// 	subItems: []
					// },
					// {
					// 	title: 'Advisor',
					// 	link: '/benefits/advisor',
					// 	subItems: []
					// },
					// {
					// 	title: 'Trade',
					// 	link: '/benefits/trade',
					// 	subItems: []
					// }
				]
			},
			{
				title: 'Media',
				link: '',
				subItems: [
					// {
					// 	title: 'Blog ',
					// 	link: '/media/blog',
					// 	subItems: []
					// },
					// {
					// 	title: 'Annual Report',
					// 	link: '/media/blog',
					// 	subItems: []
					// },
					// {
					// 	title: 'Media Presence',
					// 	link: '/media/mediapresence',
					// 	subItems: []
					// }
				]
			},
			{
				title: 'Capital Infusion',
				link: '',
				subItems: [
					// {
					// 	title: 'SAIN Investors',
					// 	link: '/infusion/investors',
					// 	subItems: []
					// },
					// {
					// 	title: 'SAIN Startups',
					// 	link: '/infusion/startups',
					// 	subItems: []
					// },
					// {
					// 	title: 'Services',
					// 	link: '/infusion/services',
					// 	subItems: []
					// }
				]
			}
		]
	}
];

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navRef = useRef(null);
	return (
		<>
			<nav class='flex px-4 border-b md:shadow-lg items-center fixed top-0 left-0 right-0 z-[1000] bg-white'>
				<Link
					to=''
					className='flex-shrink-0 flex items-center justify-center pl-10 lg:pl-14 xl:pl-16'
				>
					<img className='w-24' src='../../logo.png' alt='' />
				</Link>
				<ul
					class='md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 md:visible hidden'
					ref={navRef}
				>
					{navItems.map((navItem, i) => (
						<NavItem item={navItem} key={i} />
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

// const NavItem = ({ item }) => {
// 	return item.subItems.length <= 0 ? (
// 		<li className='p-3 xl:p-6'>
// 			<Link to={item.link}>
// 				<span>{item.title}</span>
// 			</Link>
// 		</li>
// 	) : (
// 		<NavItemDropdown item={item} />
// 	);
// };
const NavItem = ({ item }) => {
	return (
		<li className={`relative bg-white ${item.subItems.length > 0 && 'parent'}`}>
			<Link
				to={item.link}
				class={`flex justify-between md:inline-flex px-4 py-2 w-full items-center hover:bg-gray-50 space-x-2 `}
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
				<ul class='child w-full transition duration-300 md:absolute top-full right-0 md:w-48 bg-gray-200 z-[100] md:shadow-lg md:rounded-b '>
					{item.subItems.map((si, i) => {
						return <NavItem item={si} key={i} />;
					})}
				</ul>
			)}
		</li>
	);
};

const NavItemDropdown = ({ item }) => {
	const [isHidden, setIsHidden] = useState(true);

	return item.subItems.length <= 0 ? (
		<li className='py-0 px-3 xl:p-6'>
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
					<ul className='py-1' aria-labelledby='dropdownLargeButton'>
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

export default Navbar;

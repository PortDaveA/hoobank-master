import React, { useState } from 'react';
import { logo, close, menu } from '../img';
import { navLinks } from '../constants';

function Navbar() {
	const [toggle, setToggle] = useState(false);
	const navLinkElements = navLinks.map((navLink, index) =>
		<li
			key={navLink.id}
			className={
				`font-poppins font-normal text-[16px] text-[#c0bfc4]
				cursor-pointer transition-all ease-out hover:text-white
				${index === navLinks.length - 1 ? 'sm:mr-0 max-sm:mb-0' : 'sm:mr-10 max-sm:mb-4'}`
			}
		>
			<a href={`#${navLink.id}`}>
				{navLink.title}
			</a>
		</li>
	);

	function toggleClick() {
		setToggle(prevClick => !prevClick);
	}

	return (
		<nav className="w-full flex justify-between items-center py-6">
			<img src={logo} alt="Logo" className="w-[124px] h-[32px]"/>
			<ul className="sm:flex hidden justify-end items-center flex-1">
				{ navLinkElements }  
			</ul>

			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="Menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={toggleClick}
				/>

				<div className={
					`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient
					absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`
				}
				>
					<ul className="flex flex-1 flex-col items-center">
						{ navLinkElements }
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default Navbar;
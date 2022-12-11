import React from 'react';
import styles from '../css/tailwind';
import { footerLinks, socialMedia } from '../constants';
import { logo } from '../img';

function Footer() {
	const footerLinkElements = footerLinks.map((footerLink) =>
		<div key={footerLink.id} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
			<h4 className="font-poppins font-medium text-white text-[18px] leading-[27px]">
				{ footerLink.title }
			</h4>
			<ul className="mt-4">
				{ footerLink.links.map((link, index) => 
					<li 
						key={link.name}
						className={`font-poppins font-normal text-dimWhite
						text-[16px] leading-[24px] hover:text-secondary cursor-pointer
						${index === footerLink.links.length - 1 ? 'mb-0' : 'mb-4'}`}	
					>
						<a href={link.link} className={``}> 
							{ link.name }
						</a>
					</li>
				)}
			</ul>
		</div>
	);
	const socialMediaElements = socialMedia.map((social, index) => 
		<a 
			key={social.id} 
			href={social.link}
			className={`w-[21px] h-[21px] transition-all ease-out hover:scale-125
			${index === socialMedia.length - 1 ? 'mr-0' : 'mr-6'}`}
		>
			<img 
				src={social.icon} 
				alt={social.alt}
				className="w-[100%] h-[100%] object-contain"
			/>
		</a>
	);

	return (
		<footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
			<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
				<div className="flex flex-1 flex-col justify-start mr-10">
					<img src={logo} alt="HooBank" className="w-[266px] h-[72px] object-contain"/>
					<p className={`${styles.paragraph} max-w-[310px] mt-4`}>
						A new way to make the payments easy, reliable and secure.
					</p>
				</div>

				<div className="w-full flex-[1.5] flex flex-row flex-wrap 
				justify-between md:mt-0 mt-10">
					{ footerLinkElements }
				</div>
			</div>

			<div 
				className="w-full flex justify-between items-center
				md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]"
			>
				<p className="font-poppins font-normal text-white 
				text-center text-[18px] leading-[27px]">
					2021 HooBank. All Rights Reserved.
				</p>

				<div className="flex flex-row md:mt-0 mt-6">
					{ socialMediaElements }
				</div>
			</div>
		</footer>
	)
}
export default Footer;
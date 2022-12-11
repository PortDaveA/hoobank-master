import React from 'react';
import { quotes } from '../img';
import { feedback } from '../constants';
import styles from '../css/tailwind';

function FeedbackCard({ content, name, title, img }) {
	return (
		<div className="flex flex-col justify-between max-w-[370px]
		px-10 py-12 rounded-[20px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
			<img 
				src={quotes} 
				alt="Double Quotes" 
				className="w-[42px] h-[27px] object-contain"
			/>
			<p className="font-poppins font-normal text-white
			text-[18px] leading-[32px] my-10">
				{ content }
			</p>

			<div className="flex flex-row ">
				<img src={img} alt={name} className="w-[48px] h-[48px] rounded-full"/>
				<div className="flex flex-col ml-4">
					<h4 className="font-poppins font-semibold text-white
					text-[20px] leading-[32px]">
						{ name }
					</h4>
					<p className="font-poppins font-normal text-dimWhite
					text-[16px] leading-[24px]">
						{ title }
					</p>
				</div>
			</div>
		</div>
	)
}

function Testimonials({ space }) {
	const cardElements = feedback.map((card, index) => 
		<FeedbackCard 
			key={card.id}
			{...card} // all dependencies 
			index={index}
		/> 
	);

	return (
		<section className={`${styles.paddingY} ${styles.flexCenter}
		flex-col relative`}>
			<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

			<div className="w-full flex justify-between items-center
			md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
				<h1 className={styles.heading2}>
					What people are { space }
					saying about us
				</h1>
				<div className="w-full md:mt-0 mt-6">
					<p className={`${styles.paragraph} text-left max-w-[450px]`}>
						Everything you need to accept card payments and grow your business anywhere on the planet.
					</p>
				</div>
			</div>

			<div className="flex flex-wrap sm:justify-start justify-center
			w-full feedback-container relative z-[1]">
				{ cardElements }
			</div>
		</section>
	)
}
export default Testimonials;
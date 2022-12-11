import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../css/tailwind';
import Button from './Button';

function FeatureCard({ index, icon, title, content }) {
	return (
		<div className={`
			flex flex-row p-6 rounded-[20px] feature-card
			${index === features.length - 1 ? 'mb-0' : 'mb-6'}`}
		>
			<div className={`w-[64px] h-[64px] 
			rounded-full bg-dimBlue ${styles.flexCenter}`}>
				<img 
					src={icon} 
					alt="Icon" 
					className="w-[50%] h-[50%] object-contain"
				/>
			</div>
			<div className="flex flex-col flex-1 ml-3">
				<h4 className="font-poppins font-semibold text-white
				text-[18px] leading-[23px] mb-1">
					{ title }
				</h4>
				<p className="font-poppins font-normal text-dimWhite
				text-[16px] leading-[24px]">
					{ content }
				</p>
			</div>
		</div>
	)
}

function Business({ space }) {
	const featureElements = features.map((feature, index) =>
		<FeatureCard 
			key={feature.id}
			{...feature} // all dependencies 
			index={index}
		/>
	);

	return (
		<section className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					You do the business, { space }
					we’ll handle the money.
				</h2>
				<p className={`${styles.paragraph} max-w-[570px] mt-5`}>
					With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
				</p>
				<Button styles="mt-10"/>
			</div>

			<div className={`${layout.sectionImg} flex-col`}>
				{ featureElements }
			</div>
		</section>
	)
}
export default Business;
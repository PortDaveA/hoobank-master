import React from 'react';
import styles from '../css/tailwind';
import { discount, robot } from '../img';
import GetStarted from './GetStarted';

function Hero({ space }) {
	return (
		<section
			id="home"
			className={`flex md:flex-row flex-col ${styles.paddingY}`}
		>
			<div className={`flex-1 ${styles.flexStart}
			flex-col xl:px-0 sm:px-16 px-6`}>
				<div className="flex flex-row items-center
				py-[6px] px-4 mb-2 bg-discount-gradient rounded-[10px]">
					<img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
					<p className={`${styles.paragraph} uppercase ml-2`}>
						<span className="text-white"> $20 </span>
						Discount For
						<span className="text-white"> 1 month </span>
						Account
					</p>
				</div>

				<div className="w-full flex flex-row justify-between items-center">
					<h1 className="flex-1 font-poppins font-semibold 
					ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]
					text-white">
						The Next { space } {" "}
						<span className="text-gradient">
							Generation
						</span> { space } {" "}
					</h1>
					<div className="ss:flex hidden md:mr-4 mr-0">
						<GetStarted />
					</div>
				</div>

				<h1 className="w-full font-poppins font-semibold  
				ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] text-white">
					Payment Method.
				</h1>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Our team of experts uses a methodology to identify 
					the credit cards most likely to fit your needs.
					We examine annual percentage rates, annual fees.
				</p>
			</div>

			<div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
				<img 
					src={robot} 
					alt="Billing" 
					className="w-[100%] h-[100%] relative z-[5]"
				/>
				<div className="w-[40%] h-[35%] z-[0] 
				absolute top-0 pink__gradient"/>
				<div className="w-[80%] h-[80%] z-[1]
				absolute bottom-40 rounded-full white__gradient"/>
				<div className="w-[50%] h-[50%] z-[0]
				absolute right-20 bottom-20 blue__gradient"/>
			</div>
			
			{/* For Mobile Devices */}
			<div className={`ss:hidden ${styles.flexCenter}`}> 
				<GetStarted /> 
			</div>
		</section>
	)
}
export default Hero;
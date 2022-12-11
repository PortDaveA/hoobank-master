import React from 'react';
import styles from '../css/tailwind';
import { arrowUp } from '../img';

function GetStarted() {
	return (
		<div className={`w-[140px] h-[140px] p-[2px] cursor-pointer
	 	bg-blue-gradient rounded-full pulse hover:animate-none ${styles.flexCenter}`}>
			<div className={`w-[100%] h-[100%] 
			bg-primary rounded-full flex-col ${styles.flexCenter}`}>
				<p className="font-poppins font-medium 
					text-[18px] leading-[23px] text-gradient">
					<span className="flex">
						Get
						<img
							src={arrowUp}
							alt="Arrow Up"
							className="w-[23px] h-[23px] ml-1 object-contain"
						/>
					</span>
					Started
				</p>
			</div>
		</div>
	)
}
export default GetStarted;
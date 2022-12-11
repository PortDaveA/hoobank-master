import React from 'react';
import { stats } from '../constants';
import styles from '../css/tailwind';

function Stats() {
	const statElements = stats.map(stat => 
		<div key ={stat.id} className={`flex flex-1 flex-row 
		justify-start items-center m-3`}>
			<h4 className="font-poppins font-semibold text-white
			xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
				{ stat.value }
			</h4>
			<p className="font-poppins font-normal text-gradient
			xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]
			uppercase ml-3">
				{ stat.title }
			</p>
		</div>
	);

	return (
		<section className={`${styles.flexCenter} 
		flex-row flex-wrap sm:mb-20 mb-6`}>
			{ statElements }
		</section>
	)
}
export default Stats;
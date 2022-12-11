import React from 'react';
import { apple, bill, google } from '../img';
import styles, { layout } from '../css/tailwind';

function Billing({ space }) {
	return (
		<section className={layout.sectionReverse}>
			<div className={layout.sectionImgReverse}>
				<img 
					src={bill} 
					alt="Billing" 
					className="w-[100%] h-[[100%] relative z-[5]"
				/>
				<div className="w-[50%] h-[50%] rounded-full 
				absolute z-[3] top-0 -left-1/2 white__gradient"/>	
				<div className="w-[50%] h-[50%] rounded-full 
				absolute z-[0] bottom-0 -left-1/2 pink__gradient"/>
			</div>

			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Easily control your { space } 
					billing & invoicing.
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci 	rhoncus aliporttitor integer platea placerat.
				</p>

				<div className="flex flex-row flex-wrap sm:mt-10 mt-6">
					<img src={apple} alt="Apple Store" className="w-[128px] h-[42px] object-contain cursor-pointer mr-5"/>
					<img src={google} alt="Google Play" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
				</div>
			</div>
		</section>
	)
}
export default Billing;
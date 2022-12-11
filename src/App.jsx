import React from 'react';
import './css/styles.js';
import styles from './css/tailwind';
import { Hero, Navbar, Billing, Business, CardDeal, Clients, CTA, Stats, Testimonials, Footer } from './components';

function App() {
	const space = <br className="sm:block hidden"></br>

	return (
		<div className="bg-primary w-full overflow-hidden" >

			{/* ----------  --- NAVBAR --- ----------  */}
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>
			{/* ----------  --- NAVBAR --- ----------  */}



			{/* ----------  --- HERO --- ----------  */}
			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero space={space} />
				</div>
			</div>
			{/* ----------  --- HERO --- ----------  */}



			{/* ----------  --- MAIN --- ----------  */}
			<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Stats />
					<Business space={space} />
					<Billing />
					<CardDeal space={space} />
					<Testimonials space={space} />
					<Clients />
					<CTA />
					<Footer /> 
				</div>
			</div>
			{/* ----------  --- MAIN --- ----------  */}

		</div>
	)
}
export default App;
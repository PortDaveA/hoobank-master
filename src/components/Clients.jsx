import React from 'react';
import { clients } from '../constants';
import styles from '../css/tailwind';

function Clients() {
	const clientElements = clients.map(client => 
		<div 
			key={client.id} 
			className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
		>
			<img 
				src={client.logo} 
				alt="Client" 
				className="sm:w-[192px] w-[100px] object-contain"
			/>
		</div>	
	);

	return (
		<section className={`${styles.flexCenter} my-4`}>
			<div className={`${styles.flexCenter} flex-wrap w-full`}>
				{ clientElements }
			</div>
		</section>
	)
}
export default Clients;
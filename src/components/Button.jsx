import React from 'react';

function Button({ styles }) {
	return (
		<button 
			className={`font-poppins font-medium text-[18px] text-primary 
			py-4 px-6 bg-blue-gradient rounded-[10px] ${styles} duration-200
			hover:shadow-bottom hover:-translate-y-[.25em]`}
		>
			Get Started
		</button>
	)
}
export default Button;
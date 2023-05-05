/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-100': '#FAF8ED',
				'primary-300': '#2E476B',
				'primary-500': '#F66F4D',
				'secondary-100': '#2D3134',
				'secondary-300': '#5B5F62',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
			zIndex: {
				99: '99',
			},
		},
	},
	plugins: [],
};

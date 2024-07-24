import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/sections/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			white: colors.white,
			grey: '#737373',
			clr: '#D9D9D9',
			purple: '#633CFF',
			'dark-grey': '#333',
			'red-400': '#FF3939',
			'light-grey': '#FAFAFA',
			'purple-light': '#EFEBFF',
			'purple-hover': '#BEADFF',
		},
		extend: {
			backgroundImage: {
				'profile-img': 'url("/images/testimonial-1.jpeg")'
			}
		},
	},
	plugins: [],
};
export default config;

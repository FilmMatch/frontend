/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {},
		colors: {
			'primary': {        
				'50': '#fffbeb',
				'100': '#fdf2c8',
				'200': '#fbe58c',
				'300': '#f9d150',
				'400': '#f7be29',
				'500': '#f19e0f',
				'600': '#d5770a',
				'700': '#b1530c',
				'800': '#904110',
				'900': '#763611',
				'950': '#441a04',
			}
		}
	},
	plugins: [require('flowbite/plugin')],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			gluten: ['Gluten', 'cursive'],
			roboto: ['Roboto', 'sans-serif'],
			'roboto-slab': ['Roboto Slab']
		},
		extend: {
			height: {
				screen: ['100vh', '100dvh'] /* Fixes the header not being properly accounted for on mobile. */
			}
		}
	},
	plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					bg: 'var(--color-bg)',
					card: 'var(--color-card)',
					slice: 'var(--color-text)',
					text: 'var(--color-slice)',
				},
			},
		},
	},
	plugins: [],
};

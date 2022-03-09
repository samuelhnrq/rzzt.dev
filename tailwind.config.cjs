// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			minHeight: {
				'95vh': '95vh',
			},
		},
	},
	plugins: [],
};

// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			minHeight: {
				'90vh': '95vh',
			},
		},
	},
	plugins: [],
};

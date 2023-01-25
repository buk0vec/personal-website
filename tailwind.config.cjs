/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      minWidth: {
        '1/2': '50%',
        '2/5': '40%'
      },
      colors: {
        'dark-indigo': "#0a0919"
      },
      scale: {
        '101': '101%'
      }
    },
	},
	plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class'
}

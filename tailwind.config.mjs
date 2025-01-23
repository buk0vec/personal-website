/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

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
      },
      width: {
        'xl': '36rem',
      },
      fontFamily: {
        mono: ['Geist Mono Variable', ...defaultTheme.fontFamily.mono],
        sans: ['Geist Mono Variable', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xxs': '0.4rem',
        'xxxs': '0.3rem',
      }
    },

	},
	plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class'
}

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-left': {
          from: { opacity: '0', transform: 'translateX(-50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'shake-rotate': {
          '0%': { transform: 'rotate(0deg)', 'transform-origin': '50% 50%' },
          '100%': { transform: 'rotate(0deg)', 'transform-origin': '50% 50%' },
          '10%': { transform: 'rotate(8deg)' },
          '20%': { transform: 'rotate(-10deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(-10deg)' },
          '30%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '70%': { transform: 'rotate(10deg)' },
          '80%': { transform: 'rotate(-8deg)' },
          '90%': { transform: 'rotate(8deg)' },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 0.5s ease 0s 1 normal forwards',
        'shake-rotate': 'shake-rotate 2s ease 0s 1 normal forwards',
      },
      screens: {
        xsm: '550px',
      },
    },
  },
  plugins: [],
}
export default config

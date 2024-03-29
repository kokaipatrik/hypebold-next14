import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red': '#CD4747',
        'black': '#0F0F0F',
        'gray-dark': '#121212',
        'gray-dark-2': '#181818',
        'gray-dark-3': '#1D1C1C',
        'gray': '#262626',
        'gray-2': '#282828',
        'gray-3': '#383838',
        'gray-4': '#414141',
        'gray-5': '#555555',
        'gray-6': '#606060',
      },
      keyframes: {
        lineUp: {
          '0%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(5px)' },
          '100%': { transform: 'translateY(5px) rotate(45deg)' },
        },
        lineDown: {
          '0%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(-5px) rotate(-45deg)' },
        },
        evenUpDown: {
          '0%': { transform: 'translateY(30px)' },
          '33%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(30px)' },
        },
        oddUpDown: {
          '0%': { transform: 'translateY(-30px)' },
          '33%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(-30px)' },
        },
      },
      animation: {
        'line-up': 'lineUp ease-in-out .35s forwards',
        'line-up-reverse': 'lineUp ease-in-out .3s forwards reverse',
        'line-down': 'lineDown ease-in-out .35s forwards',
        'line-down-reverse': 'lineDown ease-in-out .3s forwards reverse',
        'even-up-down': 'evenUpDown ease-in-out 8s infinite',
        'odd-up-down': 'oddUpDown ease-in-out 8s infinite',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};

export default config;

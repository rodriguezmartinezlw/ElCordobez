import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#9f5f3b',
        'background-light': '#f8f3ee',
        'background-dark': '#17120f',
        'surface-light': '#fffaf5',
        'surface-dark': '#241b17',
        'text-light': '#2e211c',
        'text-dark': '#f8f3ee',
        'muted-light': '#6f5b51',
        'muted-dark': '#d4c4b8',
        'border-light': '#eadbd0',
        'border-dark': '#3a2d27',
      },
      fontFamily: {
        display: ['var(--font-playfair)'],
        sans: ['var(--font-lato)'],
      },
    },
  },
  plugins: [],
};

export default config;

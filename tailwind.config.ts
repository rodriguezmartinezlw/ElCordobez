import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--c-primary) / <alpha-value>)',
        'background-light': 'rgb(var(--c-background-light) / <alpha-value>)',
        'background-dark': 'rgb(var(--c-background-dark) / <alpha-value>)',
        'surface-light': 'rgb(var(--c-surface-light) / <alpha-value>)',
        'surface-dark': 'rgb(var(--c-surface-dark) / <alpha-value>)',
        'text-light': 'rgb(var(--c-text-light) / <alpha-value>)',
        'text-dark': 'rgb(var(--c-text-dark) / <alpha-value>)',
        'muted-light': 'rgb(var(--c-muted-light) / <alpha-value>)',
        'muted-dark': 'rgb(var(--c-muted-dark) / <alpha-value>)',
        'border-light': 'rgb(var(--c-border-light) / <alpha-value>)',
        'border-dark': 'rgb(var(--c-border-dark) / <alpha-value>)',
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

import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        sky: {
          100: '#ebf8ff',
          200: '#bee3f8',
          // Add more shades as needed
        },
        rose: {
          100: '#ffe4e6',
          200: '#fbcfe2',
          // Add more shades as needed
        },
        // Define more custom colors here
      },
    },
  },
  plugins: [],
};

export default config;

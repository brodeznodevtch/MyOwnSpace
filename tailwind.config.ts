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
        'turquoise-blue': {
          '50': '#ecfeff',
          '100': '#cffbfe',
          '200': '#a6f5fb',
          '300': '#68eaf8',
          '400': '#3edbef', // main
          '500': '#07b9d3',
          '600': '#0993b1',
          '700': '#0f768f',
          '800': '#166074',
          '900': '#164f63',
          '950': '#083444',
        },
      },
    },
  },
  plugins: [],
};
export default config;

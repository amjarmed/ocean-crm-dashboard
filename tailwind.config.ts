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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      // container
      container: {
        center: true,
        padding: '1.5rem',
      },
      // transition duration
      transitionDuration: {
        DEFAULT: '0.3s',
      },
    },
  },
  plugins: [],
};
export default config;

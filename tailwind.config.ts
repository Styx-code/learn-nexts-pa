import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px'
    },
    extend: {
      fontFamily: {
        archivo: 'var(--font-archivo)'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '4rem'
        }
      },
      colors: {
        'red-orange': {
          '500': 'color-mix(in srgb, theme("colors.red.500") 50%, theme("colors.orange.500") 50%)'
        }
      }
    }
  },
  plugins: []
} satisfies Config;

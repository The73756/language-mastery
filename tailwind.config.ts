import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4268b1',
        accent: '#ff6b6b',
        gray: '#a0a5b6',
        lightBlue: '#e8edf3',
        bg: '#fff',
      },
      fontFamily: {
        montserrat: 'var(--font-montserrat)',
        poppins: 'var(--font-poppins)',
      },
      fontSize: {
        '48-700': ['48px', { fontWeight: '700', lineHeight: '100%' }],
        '42-700': ['42px', { fontWeight: '700', lineHeight: '100%' }],
        '36-700': ['36px', { fontWeight: '700', lineHeight: '100%' }],
        '32-700': ['32px', { fontWeight: '700', lineHeight: '100%' }],

        '26-700': ['26px', { fontWeight: '700', lineHeight: '100%' }],
        '26-400': ['26px', { fontWeight: '400', lineHeight: '100%' }],

        '24-700': ['24px', { fontWeight: '700', lineHeight: '100%' }],
        '24-400': ['24px', { fontWeight: '400', lineHeight: '100%' }],

        '18-700': ['18px', { fontWeight: '700', lineHeight: '100%' }],

        '16-700': ['16px', { fontWeight: '700', lineHeight: '100%' }],
        '16-400': ['16px', { fontWeight: '400', lineHeight: '100%' }],
      },
    },
    screens: {
      sm: '480px',
      md: '546px',
      lg: '648px',
      xl: '1608px',
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '546px',
        lg: '648px',
        xl: '1608px',
      },
      padding: {
        DEFAULT: '10px',
        sm: '15px',
        xl: '20px',
      },
    },
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand neutrals - LOAM STYLE GUIDE
        'loam': {
          // Text
          text: '#231F20', // Primary text
          // Backgrounds
          white: '#FFFFFF', // Main background
          cream: '#E4D9C4', // Cream background
          tan: '#C2AA86', // Secondary background
          brown: '#987D60', // Secondary background
          // Accents
          teal: '#2E8A88', // Primary accent - CTAs, links, key highlights
          sage: '#80917A', // Secondary accent
        },
        // Legacy mappings for backward compatibility (will update components)
        'loam-brown': {
          50: '#f7f5f3',
          100: '#ede8e2',
          200: '#d9d0c4',
          300: '#c0b2a0',
          400: '#a8907a',
          500: '#8d6f57',
          600: '#987D60',
          700: '#654d3f',
          800: '#544137',
          900: '#231F20',
        },
        'loam-green': {
          50: '#f0f7f4',
          100: '#dceee6',
          200: '#bcddcd',
          300: '#8fc5ab',
          400: '#5fa684',
          500: '#3d8a6b',
          600: '#2E8A88',
          700: '#255949',
          800: '#20483d',
          900: '#1c3c33',
        },
        'loam-cream': '#E4D9C4',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


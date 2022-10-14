/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['microgrammadmedextregular', 'Helvetica'],
        myfont: 'microgrammadmedextregular',
      },
      backgroundImage: {
        'hero-pattern': "url('/herobg.png')",
        'pattern-left': "url('/bg-left.png')",
        'pattern-right': "url('/bg-right.png')",
      },
      backgroundColor: {
        darkBlue: '#0f172a',
        lightBlue: '#06b6d4',
        lighterBlue: '#effdff',
      },
      textColor: {
        darkBlue: '#0f172a',
        lightBlue: '#06b6d4',
        lighterBlue: '#effdff',
      },
    },
  },
  plugins: [],
};

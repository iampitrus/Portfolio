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
      colors: {
        darkBlue: '#0f172a',
        lightBlue: '#06b6d4',
        lighterBlue: '#effdff',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mdm': '869px',
      'mds': '500px',
      'lgm' : '1500px'
      
     
    },
    fontFamily: {
      'special' : 'Stinger Fit Trial, sans-serif',
      'special1' : 'Heading Now Trial, sans-serif'
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "#FFBE98",
        textPrimary: "#254336",
        primaryDark: "#322C2B",
        textDark: "#F97300",
        textDark2: "#FFB000",
        textTitle: "#007F73",
        titleDark: "#ECCA9C",
        titleDark2: "#F57D1F",
      },
      fontFamily: {
        text: ["Mitr", 'sans-serif'],
        title: ["Kanit", 'sans-serif'],
        chapter:["Oswald", 'sans-serif'],
        heading: ["DM Serif Display", 'sans-serif'],
        sanskritTitle:["Jaini",'sans-serif'],
        sanskritText:["Amita",'sans-serif'],
      },
    },
  },
  darkMode:'class',
  plugins: [],
};

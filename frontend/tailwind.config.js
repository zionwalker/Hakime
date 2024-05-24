/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primaryColor": "#0067FF",
        "yellowColor": "#F59E0B",
        "purpleColor": "#9771FF",
        "irisblueColor": "#01B5C5",
        "headingColor": "#181A1E",
        "textColor": "#4E545F",
        "footerColor": "#d9dce0",
        
      },
      boxShadow: {
        panelShadow: "rgba( 17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
};

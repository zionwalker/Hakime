/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primaryColor": "#3B82F6",
        "yellowColor": "#F59E0B",
        "purpleColor": "#7C3AED",
        "irisblueColor": "#4F46E5",
        "headingColor": "#374151",
        "textColor": "#4B5563"
      },
      boxShadow: {
        panelShadow: "rgba( 17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
};

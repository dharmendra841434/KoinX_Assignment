/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        hearderShadow: "0px 11px 56px -15px rgba(0,0,0,0.1)",
        cardShadow: "0px 0px 47px -27px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};

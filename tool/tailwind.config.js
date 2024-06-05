/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["halloween","bumblebee"],
  },
  darkMode: ['class','[data-theme="bumblebee"]']
};


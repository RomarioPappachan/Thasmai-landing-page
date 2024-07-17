/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(70% 50% at 50% 50%, rgba(178, 198, 73, 1) 0%, rgba(87, 101, 0, 1) 100%)',
      },
    },
  },
  plugins: [require('daisyui'),],
};

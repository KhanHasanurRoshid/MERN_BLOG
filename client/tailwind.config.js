module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this path matches your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
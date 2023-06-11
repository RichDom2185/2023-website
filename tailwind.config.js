import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        display: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

// Workaround due to https://github.com/microsoft/TypeScript/issues/47107
module.exports = tailwindConfig;

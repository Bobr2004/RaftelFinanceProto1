/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            // Dark
            customDark: "#0f0f0f", //black bg
            "customDark-100": "#121212", // inputs bg
            "customDark-200": "#171717", // box bg
            "customDark-300": "#1f1f1f", // buttons bg

            "customDark-400": "#2e2e2e", //border
            "customDark-500": "#363636", //lighter border


            // Light
            // customDark: "#0f0f0f",
            // "customDark-100": "#121212",
            // "customDark-400": "#2e2e2e"
         }
      }
   },
   plugins: []
};

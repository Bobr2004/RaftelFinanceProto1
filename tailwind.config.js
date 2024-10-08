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

            "customDark-325": "#252525", // buttons focus bg

            "customDark-400": "#2e2e2e", //border
            "customDark-500": "#363636", //hover border
            "customDark-600": "#454545", //focus border


            // Light
            customLight: "#fdfdfd", //black bg
            "customLight-100": "#fcfcfc", // inputs bg
            "customLight-200": "#ffffff", // box bg
            "customLight-300": "#fcfcfc", // buttons bg



            "customLight-325": "#f5f5f5", // buttons focus bg



            "customLight-400": "#dfdfdf", //border
            "customLight-500": "#d4d4d4", //hover border
            "customLight-600": "#8f8f8f", //focus border
         }
      }
   },
   plugins: []
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lite: "320px",
      xs: "375px",
      tx: "380px",
      xs2: "425px",
      sm: "640px",
      md: "768px",
      ipad: "820px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    fontFamily: {
      //       RedHatDisplayBold
      // RedHatDisplayBoldItalic
      // RedHatDisplayMedium
      // RedHatDisplayBoldRegular
      redhatbold: ["RedHatDisplayBold"],
      redhatitalic: ["RedHatDisplayBoldItalic"],
      redhatmedium: ["RedHatDisplayMedium"],
      redhatregular: ["RedHatDisplayBoldRegular"],
    },
    extend: {
      boxShadow: {
        "3dxl": "8px 8px 0px -8px #E1F073",
      },
    },
  },
  plugins: [],
};

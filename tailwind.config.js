/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      tel: "270px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#00BAFC",
        own_gray: "#F5F6FA",
        gray_light: "#B2C2DF",
        dark_gray: "#667281",
        light_blue: "#70AEFD",
      },
    },
    fontFamily: {
      lora: ["Lora", "serif"],
      sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      arial: ["arial", "arial"],
    },
  },
  plugins: [],
};

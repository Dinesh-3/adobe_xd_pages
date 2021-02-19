module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            footer_gray: "#2A2A2A",
            gray_dark: "#292B2A",
            skin_light: "#FFF3EB",
            skin_thin: "#F9DED1",
            skin_dark: "#E2886C",
            white_light: "#99999929",
            white_dark: "#F2F2F2",
            gray_light: "#5D5D5D",
            white: "#FFFFFF",
            gray_o_5: "rgba(0, 0, 0, 0.3)",
            white_o_3: "rgba(250, 250, 250, 0.5)"
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

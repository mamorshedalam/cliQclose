module.exports = {
  content: ["*.{html,js}"],
  // darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Sofia Sans", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      caveat: ["Caveat", "ui-sans-serif", "system-ui"],
    },
    screens: {
      xs: "420px",
      sm: "580px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1400px",
    },
  },
  plugins: [],
};

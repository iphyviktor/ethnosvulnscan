module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg-img': "url('/images/bg-image-auth.png')"
      }
    },
  },
  plugins: [],
}
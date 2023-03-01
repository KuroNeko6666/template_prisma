/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'login-image': "url('/assets/images/logo.png')",
    }
  },
  plugins: [],
}

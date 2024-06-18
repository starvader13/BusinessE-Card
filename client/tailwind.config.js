/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato": ['Lato', 'sans-serif']
      },
      animation:{
        bounceOnce: "bounce 2s linear 1",
        pingOnce: "ping 2s linear 1",
        spinOnce: "spin 2s linear 1",
      },
      backgroundImage: {
        card: "url('background-card.webp')",
      }
    },
  },
  plugins: [],
}

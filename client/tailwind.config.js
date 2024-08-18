/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins",
        sansitaSwashed: "Sansita Swashed",
        sawarbiGothlic: "Sawarabi Gothic"
      },
      colors: {
        customBlue: "#00A7DC",
        buttonGray: "#676666",
        ellipseGrey: "#c4c4c4",
      },
    },
  },
  plugins: [],
}

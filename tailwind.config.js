/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ss': {'min': '350px'},
        'xs': {'min': '450px'},
        'sm': {'min': '640px'},
        'md': {'min': '768px'},
        'lg': {'min': '1024px'},
        'xl': {'min': '1280px'},
        '2xl': {'min': '1536px'},
      },
      backgroundImage: {
        'img1': "url('/src/assets/logo/theme/sunny.png')",
        'img2': "url('/src/assets/logo/theme/image.png')",
      },
    },
  },
  plugins: [],
}

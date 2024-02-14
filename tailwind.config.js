/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'close-menu': "url('/src/components/icons/close.vue')",
        'open-menu': "url('/src/components/icons/hamburguesa.vue')"
      }
    },
  },
  plugins: [],
}


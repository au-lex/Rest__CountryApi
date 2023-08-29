/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'light': 'var(--VeryLightGray)',
        'dark': 'var(--VeryDarkBlue)',
      },
      textColor: {
        'light': 'var(--VeryLightGray)',
        'dark': 'var(--VeryDarkBlue)',
      }
    }
  },
  
  plugins: [],
}


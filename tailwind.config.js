/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#0B0F17',
          surface: '#0D1117',
        }
      },
      boxShadow: { 
        soft: "0 12px 34px rgba(0,0,0,0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
      } 
    }
  },
  plugins: [],
};

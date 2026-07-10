/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",

         primary: "hsl(var(--primary))",
    gold: "hsl(var(--gold))", 
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        destructive: "hsl(var(--destructive))",
      },
      fontFamily: {
    serif: ["Cormorant Garamond", "serif"],
    sans: ["Inter", "sans-serif"],
  },
      
    },
  },
  plugins: [],
}


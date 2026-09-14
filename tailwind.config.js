/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          800: "#102a43",
          900: "#0b192c",
          950: "#07111e",
        },
        brand: {
          blue: "#1d4ed8",
          "blue-hover": "#1e40af",
          light: "#eff6ff",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        surface: "#f8fafc",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

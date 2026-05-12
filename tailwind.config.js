/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0d0d0e",
          light: "#161618",
          lighter: "#1c1c1e",
        },
        charcoal: {
          DEFAULT: "#2c2c2e",
          light: "#3a3a3c",
          dark: "#1c1c1e",
        },
        alabaster: "#f5f5f7",
        pearl: "#a1a1a6",

        gray: {
          50: "#fbfbfd",
          100: "#f5f5f7",
          200: "#e5e5ea",
          300: "#d1d1d6",
          400: "#aeaeb2",
          500: "#8e8e93",
          600: "#636366",
          700: "#48484a",
          800: "#3a3a3c",
          900: "#2c2c2e",
          950: "#1c1c1e",
        },

        hero: "#0d0d0e",
        "custom-black": "#050505",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      animation: {
        "fade-in": "fadeIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "subtle-glow":
          "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

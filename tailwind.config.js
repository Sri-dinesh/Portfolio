/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Apple-inspired Industrial Monochrome Palette
        obsidian: {
          DEFAULT: "#0d0d0e", // Deep, rich background (not flat black)
          light: "#161618", // Secondary surfaces
          lighter: "#1c1c1e", // Elevated elements
        },
        charcoal: {
          DEFAULT: "#2c2c2e", // Borders / Dividers
          light: "#3a3a3c", // Interactive elements
          dark: "#1c1c1e",
        },
        alabaster: "#f5f5f7", // Primary text (Luminous off-white)
        pearl: "#a1a1a6", // Secondary text (Soft grey)

        // Refined Gray Scale (Cooler, Steel-like tones)
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

        // Semantic mappings for backward compatibility
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
        "fade-in": "fadeIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)", // Smooth, premium easing
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

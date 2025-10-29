import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandRed: "#d33a2e",
        brandBlue: "#0b72b9",
      },
      borderRadius: {
        "2xl": "1.5rem",
      },
    },
  },
} satisfies Config;

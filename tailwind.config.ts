import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily : {
        jetbrains: ['JetBrains', 'sans-serif']
      },
      backgroundImage : {
        'grey-gradient': 'linear-gradient(90deg, rgba(217, 217, 217, 0.6) 0%, rgba(115, 115, 115, 0.7) 100%)',
      }
    },
  },
  plugins: [],
} satisfies Config;

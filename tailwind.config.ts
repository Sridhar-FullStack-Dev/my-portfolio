import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "0px",
        mobile_m: "375px",
        mobile_l: "425px",
        tablet: "768px",
        laptop: "1024px",
        laptop_l: "1440px",
        "4k": "2560px",
      },
      colors: {
        "alt-black": "#0C0C0C",
        "alt-white": "#EFEFEF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

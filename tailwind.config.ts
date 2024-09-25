import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "var(--black)"
      },
      boxShadow: {
        sd: '0 0 15px rgba(0, 0, 0, 0.3)',
      },
      fontSize: {
        large:"36px",
        medium: "24px",
        small: "16px"
      },
      fontFamily: 
      {
        robFont: "var(--roboto)" // no html tem que usar o nome robFont, nn o nome da variável de roboto
      }
      // screens:
      // {
      //   "2lg": "1920px"
      // }
    },
  },
  plugins: [],

};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text": "var(--primary-text)",
        body: "var(--body)",
        elements: "var(--elements)",
        "elements-hover": "var(--elements-hover)",
        "input-text": "var(--input-text)",
      },
    },
  },
  plugins: [],
};
export default config;

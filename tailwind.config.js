/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
  daisyui: {
    themes: ["night"],
  },
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-800px)" },
        },
      },
      animation: {
        "spin-slow": "spin reverse 250s linear infinite",
        "marquee-slow": "marquee 40s linear infinite ",
        "marquee-slow-reverse": "marquee 40s linear infinite reverse",
      },
    },
  },
};

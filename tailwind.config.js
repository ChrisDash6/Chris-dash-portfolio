/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        accent: "var(--accent)",
      },
      backgroundImage:{
        'firefly-radial':  'radial-gradient(50% 50% at 50% 50%, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.4) 25%, rgba(255, 215, 0, 0.6) 50%, rgba(255, 215, 0, 0.8) 75%, rgba(255, 215, 0, 1) 100%)',
        'box-shadow': '0 0 10px 5px rgba(255, 215, 0, 0.8)'
      },
      boxShadow: {
        "glass-inset": "inset 0 17px 10px -9px rgba(254,254,91,08)",
        "glass-sm": " 5px 5px 20px 0px rgba(254,254,91,0.3)",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-slow-reverse": "spin-reverse 40s linear infinite",
      },
      screens:{
        xs: "480px",
        
      }
    },
  },
  plugins: [],
};

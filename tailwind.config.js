/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        backGroud:
          "url('https://media.istockphoto.com/id/178414064/photo/blue-spot-lights.webp?b=1&s=170667a&w=0&k=20&c=5aDLTDPiXeocPrNZzafEblW18gvx9rrSVnKKtB9aHRM=')",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 0.5s ease-in-out forwards",
        fadeInLeft: "fadeInLeft 0.7s  linear",
        fadeInRight: "fadeInRight 0.7s  linear",
        fadeInTop: "fadeInTop 0.3s linear",
      },
      keyframes: {
        wiggle: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(0)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(-40px)",
          },
        },
        fadeInTop: {
          "0%": {
            // opacity: 0,
            transform: "translateY(200px)",
          },
          "100%": {
            // opacity: 1,
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};

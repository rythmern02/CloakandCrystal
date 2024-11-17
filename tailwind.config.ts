import type { Config } from "tailwindcss";

export default {
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
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px 10px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px 20px rgba(139, 92, 246, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'twinkle': {
          '0%, 100%': { opacity: "0.3" },
          '50%': { opacity: "0.7" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'rgba(75, 0, 130, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;


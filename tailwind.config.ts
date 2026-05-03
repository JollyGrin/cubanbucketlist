import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: '#F5EFE3',
          50: '#FBF7EE',
          100: '#F5EFE3',
          200: '#ECE3CE',
        },
        ink: {
          DEFAULT: '#1B1814',
          soft: '#3A322B',
          muted: '#6B5F52',
        },
        teal: {
          DEFAULT: '#0E5F5A',
          deep: '#08443F',
          light: '#2C8C84',
        },
        coral: {
          DEFAULT: '#E5613D',
          deep: '#C24A2A',
          soft: '#F18A6A',
        },
        mustard: {
          DEFAULT: '#D9A441',
          deep: '#B0822A',
        },
        terracotta: {
          DEFAULT: '#A8462C',
          deep: '#7E3320',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        hand: ['var(--font-hand)', 'cursive'],
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--tw-rotate))' },
          '50%': { transform: 'translateY(-6px) rotate(var(--tw-rotate))' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(229, 97, 61, 0.5)' },
          '50%': { boxShadow: '0 0 0 14px rgba(229, 97, 61, 0)' },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
        'shimmer': 'shimmer 8s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;

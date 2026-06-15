/** @type {import('tailwindcss').Config} */
const rgb = (v) => `rgb(var(${v}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Theme-aware tokens — values defined as CSS variables in index.css.
        // The semantic meaning is constant (ink-950 = page bg, ash-100 = primary
        // text); only the variable VALUES swap between dark and light themes.
        ink: {
          950: rgb('--ink-950'),
          900: rgb('--ink-900'),
          850: rgb('--ink-850'),
          800: rgb('--ink-800'),
          700: rgb('--ink-700'),
          600: rgb('--ink-600'),
        },
        ash: {
          400: rgb('--ash-400'),
          300: rgb('--ash-300'),
          200: rgb('--ash-200'),
          100: rgb('--ash-100'),
        },
        ember: {
          DEFAULT: rgb('--ember'),
          bright: rgb('--ember-bright'),
          deep: rgb('--ember-deep'),
          glow: rgb('--ember-glow'),
        },
      },
      fontFamily: {
        display: ['"Clash Display"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Satoshi"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '0.85' },
          '50%': { opacity: '0.5' },
          '55%': { opacity: '0.9' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.82)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        flicker: 'flicker 6s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2.2s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};

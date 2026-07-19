/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        surface: '#102A1F',
        background: '#071A12',
        section: '#0B1F17',
        emerald: '#34D399',
        emeraldDark: '#059669',
        mint: '#6EE7B7',
        mintSoft: '#A7F3D0',
        muted: '#CBD5E1',
        'muted-dark': '#94A3B8',
        glow: '#A7F3D0',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'glow-gradient':
          'radial-gradient(circle at 10% 10%, rgba(52,211,153,0.22), transparent 28%), radial-gradient(circle at 95% 5%, rgba(167,243,208,0.16), transparent 30%), radial-gradient(circle at 70% 90%, rgba(16,185,129,0.12), transparent 35%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(52,211,153,0.22)',
        soft: '0 18px 80px rgba(7,26,18,0.24)',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(24px, -24px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 24px) scale(0.96)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        blob: 'blob 14s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

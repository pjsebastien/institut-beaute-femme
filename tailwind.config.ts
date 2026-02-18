import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rose-poudre': '#E8B4B8',
        'rose-fonce': '#C48B8B',
        'beige-creme': '#FAF7F5',
        'nude-rose': '#D4A5A5',
        'charbon': '#2D2D2D',
        'or-rose': '#B76E79',
        'rose-pale': '#F5E6E8',
        'blanc-casse': '#FFFBF9',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-rose': 'linear-gradient(135deg, #E8B4B8 0%, #D4A5A5 100%)',
        'gradient-hero': 'linear-gradient(180deg, #FAF7F5 0%, #F5E6E8 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(200, 139, 139, 0.15)',
        'card': '0 2px 12px rgba(45, 45, 45, 0.08)',
        'hover': '0 8px 30px rgba(200, 139, 139, 0.25)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

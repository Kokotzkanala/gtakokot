/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vice: {
          pink: '#ff1493',
          purple: '#9b00e8',
          cyan: '#00f0ff',
          sunset: '#ff4500',
          orange: '#ff8c00',
          yellow: '#ffcc00',
          dark: '#08060c',
          card: '#0f0c18',
          border: 'rgba(255, 20, 147, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Impact', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'vice-gradient': 'linear-gradient(135deg, #ff1493 0%, #9b00e8 50%, #00f0ff 100%)',
        'sunset-gradient': 'linear-gradient(180deg, #ff4500 0%, #ff1493 60%, #4a0072 100%)',
        'dark-glass': 'linear-gradient(135deg, rgba(20, 16, 35, 0.75) 0%, rgba(10, 8, 18, 0.85) 100%)',
      },
      boxShadow: {
        'neon-pink': '0 0 25px rgba(255, 20, 147, 0.65)',
        'neon-purple': '0 0 25px rgba(155, 0, 232, 0.65)',
        'neon-cyan': '0 0 25px rgba(0, 240, 255, 0.65)',
        'neon-sunset': '0 0 30px rgba(255, 69, 0, 0.6)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

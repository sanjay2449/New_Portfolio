export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 6s linear infinite',
        'bounce-slow': 'bounce 4s infinite',
        'fade-in': 'fadeIn 2s ease-out both',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },

  plugins: [
    require('tailwind-scrollbar-hide')
  ]
};

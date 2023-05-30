const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        paragraph: ['Inter var', ...defaultTheme.fontFamily.sans],
        header: ['Kanit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'custom-50': '#E3F1F6',
        'custom-100': '#C7E3ED',
        'custom-200': '#ABD4E4',
        'custom-300': '#72B8D2',
        'custom-400': '#3A9BC0',
        'custom-500': '#1E8DB7',
        'custom-600': '#135872',
        'custom-700': '#0F475B',
        'custom-800': '#0B3545',
        'custom-900': '#07232E',
      },
      keyframes: {
        'plane-enter': {
          '0%': {
            opacity: 0,
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        'plane-leave': {
          '0%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
          '50%': {
            opacity: 1,
            transform: 'translateX(50%)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateX(100%)',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-138%)' }, // 6 reviews = 168%
        },
        marquee2: {
          '0%': { transform: 'translateX(138%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueemobile: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-152%)' },
        },
        marquee2mobile: {
          '0%': { transform: 'translateX(152%)' }, // 6 reviews = 174%
          '100%': { transform: 'translateX(0%)' },
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1
          },
        },
        'slide-out-left': {
          '0%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
          '100%': {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
        },
      },
      animation: {
        'plane-enter': 'plane-enter 0.7s ease-out forwards',
        'plane-leave': 'plane-leave 0.3s ease-out forwards',


        marquee: 'marquee 55s linear infinite',
        marquee2: 'marquee2 55s linear infinite',
        marqueemobile: 'marqueemobile 55s linear infinite',
        marquee2mobile: 'marquee2mobile 55s linear infinite',

        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-left2': 'slide-in-left 0.7s ease-out',
        'slide-in-left3': 'slide-in-left 0.8s ease-out',
        'slide-in-left4': 'slide-in-left 1s ease-out',
        'slide-in-left5': 'slide-in-left 1.1s ease-out',

        'slide-out-left': 'slide-out-left 0.3s ease-out',
        'slide-out-left2': 'slide-out-left 0.4s ease-out',
        'slide-out-left3': 'slide-out-left 0.5s ease-out',
        'slide-out-left4': 'slide-out-left 0.6s ease-out',
        'slide-out-left5': 'slide-out-left 0.7s ease-out',
      },
      backgroundImage : {
        'home' : "url('overfly_az.webp')",
        'ctahead' : "url('cta_banner_ideal.webp')",
        'sunset' : "url('sunset.webp')",
        'archbg' : "url('archbg.webp')",
        'piper' : "url('piper_sunset.webp')",
        'cessna-sunset' : "url('cessna_sunset_dark.webp')",
        'dark-hangar' : "url('dark_hangar.webp')",
        'ideal-ramp' : "url('ideal_ramp.webp')",
        'aerial' : "url('aerial.webp')",
        'pilot-thumbs' : "url('pilot_thumbs.webp')",
        'hangarbg' : "url('hangarbg.webp')",
        'mountain' : "url('mountain_backdrop.webp')",
        'discovery-flight' : "url('discovery-flight-bg.webp')"
        
        
      },
      height: theme => ({
        'screen-1/2': '50vh',
        'screen-2/3': '66vh',
        'screen-1/3': 'calc(100vh / 3)',
        'screen-3/4': '75vh',
        'screen-4/5': '80vh',
        'screen-mobile' : '110.1vh', //depends on menu height
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}

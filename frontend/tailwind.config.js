/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {},
    colors :{
      white: 'rgb(var(--color-white) / <alpha-value>)',
      green1: 'var(--color-green1)', 
      green2: 'var(--color-green2)',
      yellow: 'var(--color-yellow)',
      orange: 'var(--color-orange)',
      beige: 'var(--color-beige)',
      error: 'var(--color-error)',
      brown: 'var(--color-brown)'
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'vidaloka': ['Vidaloka'],
    },
  },
  plugins: [
  ],
  safelist: [
    {
      pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/
    },
    {
      pattern: /border-.*/
    },
    {
      pattern: /flex-.*/
    },
    {
      pattern: /(bottom|right|top|left)-[0-9]+/
    },
    {
      pattern: /(w|h|px)-[0-9]+/
    },
    {
      pattern: /bg-(white|blue|secondaryColor|frameColor|background|ternaryColor1|ternaryColor2|error|border)+/,
      variants: ['lg', 'hover', 'focus', 'lg:hover', 'scrollbar'],
    }

  ]
}

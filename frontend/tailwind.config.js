/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {},
    colors :{
      white: 'rgb(var(--color-white) / <alpha-value>)',
      background: 'var(--color-background)', 
      secondaryColor: 'var(--color-secondary)',
      frameColor: 'var(--color-frame)',
      ternaryColor1: 'var(--color-ternary1)',
      ternaryColor2: 'var(--color-ternary2)',
      error: 'var(--color-error)',
      border: "#797979"
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

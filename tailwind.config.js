const plugin = require('tailwindcss/plugin')
const svgToDataUri = require('mini-svg-data-uri')


const flattenColorPalette = (colors)=> {
  const flattened = Object.assign({ }, ...Object.entries(colors !== null && colors !== void 0 ? colors : {}).flatMap(([color, values])=> typeof values == "object" ? Object.entries(flattenColorPalette(values)).map(([number, hex])=> ({
    [color + (number === "DEFAULT" ? "" : `-${number}`)]: hex
  })) : [
    {
      [`${color}`]: values
    }
  ]))

  return flattened
}



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ], darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    function({ matchUtilities, theme}) {
      matchUtilities({
            'bg-grid': (value) => ({
              backgroundImage: `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
              )}")`,
            }),
          },
          {
            values: flattenColorPalette(theme('colors')),
            type: 'color',
          })

      matchUtilities(
          {
            'highlight': (value) => ({
              boxShadow: `inset 0 1px 0 0 ${value}`,
            })
          },
          {
            values: flattenColorPalette(theme('colors')),
            type: 'color',
          }
      )
    }
  ],
}

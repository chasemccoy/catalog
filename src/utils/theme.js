const breakpoints = [
	'500px', '700px', '1000px', '1300px'
]

const colors = {
  text: '#024',
  blue: '#07c',
  // nested objects work as well
  dark: {
    blue: '#058'
  },
  // arrays can be used for scales of colors
  gray: [
    '#333',
    '#666',
    '#999',
    '#ccc',
    '#eee',
    '#f6f6f6',
  ],
	highlight: '#FFF67F'
}

const space = [
  0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 128, 256, 512
]

const fontWeights = {
	light: 300,
	normal: 400,
	medium: 500,
	semibold: 600,
	bold: 700,
	heavy: 800
}

const fontFamily = {
	sans: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'",
	serif: "'Karla', 'Georgia', 'serif'"
}

// const letterSpacings = {
//   normal: 'normal',
//   caps: '0.25em'
// }

const radii = [
  0, 2, 4, 8, 12
]

// const borders = [
//   0, '1px solid', '2px solid'
// ]

const theme = {
  breakpoints,
  colors,
  space,
  fontWeights,
	fontFamily,
  // letterSpacings,
  radii
  // borders,
}

export default theme

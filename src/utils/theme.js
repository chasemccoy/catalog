const breakpoints = [
  '500px', // tiny
  '700px', // small
  '1000px', // medium
  '1300px' // large
]

const colors = {
  primary: '#1DADF5',
  text: '#024',
  blue: {
    light: '#07C',
    dark: '#058'
  },
  gray: ['#333', '#666', '#999', '#ccc', '#eee', '#f6f6f6'],
  highlight: '#FFF67F',
  text: {
    primary: '#002040',
    secondary: '#657886',
    muted: '#9EA3A8'
  }
}

const space = [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 128, 256, 512]

const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  heavy: 800,
}

const fontFamily = {
  sans:
    "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'",
  serif: "'Karla', 'Georgia', 'serif'",
  body: "'SF Serif', 'Georgia', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'serif'"
}

const shadows = {
  light: '0 0 5px rgba(0, 0, 0, 0.1)'
}

// const letterSpacings = {
//   normal: 'normal',
//   caps: '0.25em'
// }

const radii = [0, 2, 4, 8, 12]

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
  radii,
  // borders,
  shadows
}

export default theme

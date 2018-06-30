const breakpoints = [
  '500px', // tiny
  '700px', // small
  '1000px', // medium
  '1300px' // large
]

const colors = {
  primary: '#1DADF5',
  serifText: '#000207',
  blue: {
    light: '#07C',
    dark: '#058'
  },
  gray: ['#333', '#666', '#999', '#ccc', '#eee', '#f6f6f6'],
  highlight: '#FFF67F',
  text: {
    primary: '#444444',
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
  body: "'Tiempos', 'SF Serif', 'Georgia', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'serif'"
}

const shadows = {
  light: '0 0 5px rgba(0, 0, 0, 0.1)'
}

const radii = [0, 2, 4, 8, 12]

const theme = {
  breakpoints,
  colors,
  space,
  fontWeights,
  fontFamily,
  radii,
  shadows
}

export default theme

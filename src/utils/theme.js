const breakpoints = [
  '500px',
  '700px',
  '1000px',
  '1300px'
]

const namedBreakpoints = {
  tiny: breakpoints[0],
  small: breakpoints[1],
  medium: breakpoints[2],
  large: breakpoints[3]
}

const colors = {
  page: {
    light: '#FFFEFC',
    dark: '#000000'
  },
  type: {
    body: '#474746',
    menu: '#666666',
    menuMuted: '#CCCCCC'
  },
  gray: {
    0: '#FAF8F5',
    1: '#E4E6D3',
    2: '#CBCCBC',
    3: '#98998D',
    4: '#72736A'
  }
}

const space = [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 128, 256, 512]

const sizes = {
  layout: {
    maxWidth: '40rem',
    offset: '20%'
  },
  timeline: {
    pointWidth: '12px',
    lineWidth: '2px',
    linePadding: '32px',
  }
}

const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  heavy: 800,
}

const fontFamily = {
  sans: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  serif: "Tiempos, SF Serif, Georgia, serif",
  mono: "iA Writer Duospace, Inconsolata"
}

const theme = {
  breakpoints,
  namedBreakpoints,
  colors,
  space,
  sizes,
  fontWeights,
  fontFamily
}

export default theme

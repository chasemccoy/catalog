const breakpoints = [
  '576px',
  '768px',
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
  accent: Object.assign('#0000FF', {
    light: '#E9E9F5',
    dark: '#000088'
  }),
  page: {
    light: '#FFFEFC',
    dark: '#000000',
    background: 'white',
    text: '#1e1f22'
  },
  type: {
    body: '#1e1f22',
    header: '#1e1f22',
    menu: '#666666',
    link: '#0000FF',
    linkHover: '#000088'
  },
  gray: {
    0: '#F5F5FA',
    1: '#E1E1E6',
    2: '#C8C8CC',
    3: '#969699',
    4: '#646466'
  },
  neutral: '#646466'
}

const space = [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 128, 256, 512]

const sizes = {
  layout: {
    containerPadding: 64,
    sidebarWidth: 280,
    contentMaxWidth: 700,
    gutter: 0
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

const fonts = {
  sans: "Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  serif: "Source Serif Pro, Tiempos, SF Serif, Georgia, serif",
  mono: "iA Writer Duospace, Menlo, Monaco, OperatorMono-Book, Inconsolata, monospace"
}

const theme = {
  name: 'light',
  breakpoints,
  namedBreakpoints,
  colors,
  space,
  sizes,
  fontWeights,
  fonts
}

export default theme

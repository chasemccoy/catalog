const breakpoints = ['550px', '700px', '900px', '1200px']

const namedBreakpoints = {
  tiny: breakpoints[0],
  small: breakpoints[1],
  medium: breakpoints[2],
  large: breakpoints[3]
}

const space = [0, 1, 2, 3, 4, 5, 6, 7]

const sizes = {
  contentWidth: '50rem',
  sidebarWidth: '15rem',
  sidebarWidthWithGutter: 'calc(18rem + 24px)',
  layout: {
    maxWidth: 952
  },
  timeline: {
    pointWidth: '12px',
    lineWidth: '2px',
    linePadding: '32px'
  }
}

const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  heavy: 900
}

const fonts = {
  get sans() {
    return this.system
  },
  get serif() {
    return this.headers
  },
  get mono() {
    return this.system
  },
  headers: `"Untitled Serif", Georgia, Times New Roman, serif`,
  code: `"Source Code Pro", "IBM Plex Mono", Consolas, Menlo, Monaco, monospace`,
  system: `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif`
}

const colors = {
  accent: Object.assign('#dd9903', {
    light: '#fff8e2',
    soft: '#ffe99a',
    medium: '#ffe16e',
    pop: '#ffcd1c',
    dark: '#ba7506'
  }),
  page: {
    text: '#1e1f22',
    code: 'rgb(33, 33, 57)'
  },
  type: {
    body: '#1e1f22',
    header: '#1e1f22',
    code: '#c6dbf4'
  },
  gray: {
    0: '#faf9f8',
    1: '#eeedea',
    2: '#e2e1db',
    3: '#a5a08d',
    4: '#726c59',
    5: '#423f34'
  },
  yellow: {
    0: '#fff8e2',
    100: '#fdefcd',
    200: '#ffe99a',
    300: '#ffe16e',
    400: '#ffd943',
    500: '#ffcd1c',
    600: '#ffbc00',
    700: '#dd9903',
    800: '#ba7506',
    900: '#944c0c',
    1000: '#542a00',
    1100: '#2d1a05'
  }
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

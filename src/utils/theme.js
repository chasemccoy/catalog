const breakpoints = ['550px', '600px', '800px', '1300px']

const namedBreakpoints = {
  tiny: breakpoints[0],
  small: breakpoints[1],
  medium: breakpoints[2],
  large: breakpoints[3]
}

const space = [0, 1, 2, 3, 4, 5, 6, 7]

const sizes = {
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
    return this.system
  },
  get mono() {
    return this.system
  },

  code: `"IBM Plex Mono", Consolas, Menlo, Monaco, monospace`,
  system: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif`
}

const colors = {
  accent: Object.assign('#DB9102', {
    light: '#FFFAE5',
    soft: '#FFE999',
    medium: '#ffda73',
    pop: '#FFCD3F',
    dark: '#b3821c'
  }),
  page: {
    background: 'white',
    text: '#1e1f22',
    code: 'rgb(33, 33, 57)'
  },
  type: {
    body: '#1e1f22',
    header: '#1e1f22',
    menu: '#666666',
    link: '#0000FF',
    linkHover: '#000088',
    code: '#c6dbf4'
  },
  gray: {
    0: '#F8F9FA',
    1: '#EBEBEB',
    2: '#D6D6D6',
    3: '#A6A6A6',
    4: '#616161',
    5: '#414141'
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

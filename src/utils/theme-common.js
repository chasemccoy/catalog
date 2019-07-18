const breakpoints = ['500px', '600px', '1000px', '1300px']

const namedBreakpoints = {
  tiny: breakpoints[0],
  small: breakpoints[1],
  medium: breakpoints[2],
  large: breakpoints[3]
}

const space = [0, 4, 8, 12, 16, 24, 32, 40]

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
  heavy: 800
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

  code: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,

  system: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif`
}

const theme = {
  breakpoints,
  namedBreakpoints,
  space,
  sizes,
  fontWeights,
  fonts
}

export default theme

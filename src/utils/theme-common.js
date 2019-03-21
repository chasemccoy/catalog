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

const space = [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 128, 256, 512]

const sizes = {
  layout: {
    containerPadding: 48,
    sidebarWidth: 280,
    contentMaxWidth: 728,
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
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  serif: "Source Serif Pro, Tiempos, SF Serif, Georgia, serif",
  mono: "iA Writer Quattro, Menlo, Monaco, OperatorMono-Book, Inconsolata, monospace",
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
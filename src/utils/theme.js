import common from 'utils/theme-common'

const breakpoints = common.breakpoints
const namedBreakpoints = common.namedBreakpoints
const space = common.space
const sizes = common.sizes
const fontWeights = common.fontWeights
const fonts = common.fonts

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
    4: '#5A5A5C'
  },
  neutral: '#646466'
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

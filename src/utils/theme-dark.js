import common from 'utils/theme-common'

const breakpoints = common.breakpoints
const namedBreakpoints = common.namedBreakpoints
const space = common.space
const sizes = common.sizes
const fontWeights = common.fontWeights
const fonts = common.fonts

const colors = {
  accent: Object.assign('#FCBC4C', {
    light: '#FFE8BF40',
    dark: '#E6960B'
  }),
  page: {
    light: '#FFFEFC',
    dark: '#000000',
    background: '#222',
    text: '#DDD'
  },
  type: {
    body: '#1e1f22',
    header: '#1e1f22',
    menu: '#666666',
    link: '#0000FF',
    linkHover: '#000088'
  },
  gray: {
    0: '#403F3E',
    1: '#8A8987',
    2: '#BDBBB9',
    3: '#CCCBC8',
    4: '#DBDAD7'
  },
  neutral: '#8A8987'
}

const theme = {
  name: 'dark',
  breakpoints,
  namedBreakpoints,
  colors,
  space,
  sizes,
  fontWeights,
  fonts
}

export default theme

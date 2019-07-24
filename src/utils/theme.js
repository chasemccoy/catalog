import common from 'utils/theme-common'

const breakpoints = common.breakpoints
const namedBreakpoints = common.namedBreakpoints
const space = common.space
const sizes = common.sizes
const fontWeights = common.fontWeights
const fonts = common.fonts

const colors = {
  accent: Object.assign('#DB9102', {
    light: '#FFF4CB',
    pop: '#FFD233',
    soft: '#FFE999'
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
    0: '#F9F9F9',
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

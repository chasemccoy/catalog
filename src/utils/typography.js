import { createGlobalStyle } from 'styled-components'
import Typography from 'typography'
import theme from 'utils/theme'

const fontFamilyArray = value => value.replace(/[""&]+/g, '').split(', ')

const typography = new Typography({
  includeNormalize: false,
  baseFontSize: '17px',
  baseLineHeight: 1.45,
  headerLineHeight: 1.3,
  blockMarginBottom: 0.85,
  bodyFontFamily: fontFamilyArray(theme.fonts.sans),
  headerFontFamily: fontFamilyArray(theme.fonts.sans),
  scaleRatio: 1.8,
  headerWeight: theme.fontWeights.heavy,
  bodyWeight: theme.fontWeights.normal,
  boldWeight: theme.fontWeights.bold,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    body: {
      '-webkit-font-smoothing': 'antialiased'
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(1.5),
      marginBottom: '0.6em'
    },
    img: {
      height: 'auto'
    },
    ul: {
      marginLeft: '0'
    },
    pre: {
      fontSize: '1em'
    },
    code: {
      fontSize: '0.75em',
      lineHeight: 1.5
    },
    'pre code': {
      lineHeight: 1.5,
      fontSize: '14px'
    }
  })
})

const TypographyStyles = createGlobalStyle`
  ${typography.toString()}
`

export default TypographyStyles

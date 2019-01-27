import Typography from 'typography'
import theme from 'utils/theme'

const fontFamilyArray = value => value.replace(/[""&]+/g, '').split(', ')

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  headerLineHeight: 1.3,
  blockMarginBottom: 0.85,
  bodyFontFamily: fontFamilyArray(theme.fonts.serif),
  headerFontFamily: fontFamilyArray(theme.fonts.serif),
  scaleRatio: 1.6,
  headerWeight: theme.fontWeights.semibold,
  bodyWeight: theme.fontWeights.normal,
  boldWeight: theme.fontWeights.bold,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    body: {
      '-webkit-font-smoothing': 'antialiased'
    },
    img: {
      height: 'auto'
    },
    ul: {
      marginLeft: '1rem'
    },
    pre: {
      fontSize: '1em'
    },
    code: {
      fontSize: '0.75em',
      lineHeight: 1.5
    },
    a: {
      textDecorationSkip: 'unset',
      '-webkit-text-decoration-skip': 'unset'
    }
  })
})

export default typography

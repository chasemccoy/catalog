import Typography from 'typography'
import theme from 'utils/theme'

const fontFamilyArray = value => value.replace(/[\"\"&]+/g, '').split(', ')

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.5,
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
      overflow: 'auto',
      backgroundColor: theme.colors.gray[0]
    },
    code: {
      fontFamily: theme.fonts.mono,
      backgroundColor: theme.colors.gray[0],
      padding: '4px 8px',
      display: 'inline-block',
      wordWrap: 'normal',
      overflow: 'auto'
    },
    'pre code': {
      padding: '8px 16px'
    },
  })
})

export default typography

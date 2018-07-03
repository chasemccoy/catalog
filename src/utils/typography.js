import Typography from 'typography'
import theme from 'utils/theme'

const fontFamilyArray = value => value.replace(/[\"\"&]+/g, '').split(', ')

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  bodyFontFamily: fontFamilyArray(theme.fontFamily.sans),
  headerFontFamily: fontFamilyArray(theme.fontFamily.serif),
  scaleRatio: 1.6,
  headerLineHeight: 1.5,
  bodyColor: theme.colors.type.body,
  headerWeight: theme.fontWeights.bold,
  bodyWeight: theme.fontWeights.normal,
  boldWeight: theme.fontWeights.bold,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    body: {
      '-webkit-font-smoothing': 'antialiased'
    },
    'h1,h3,h4,h5,h6': {
      marginBottom: rhythm(1/2),
    },
    a: {
      WebkitTextDecorationSkip: 'unset', 
      color: theme.colors.type.body,
      transition: '0.3s all',
      textDecoration: 'none',
      textDecorationColor: theme.colors.gray[2],
      '-webkit-text-decoration-color': theme.colors.gray[2]
    },
    'a:hover': {
      textDecorationLine: 'underline',
      textDecorationColor: theme.colors.type.body,
      '-webkit-text-decoration-color': theme.colors.type.body
    },
    img: {
      height: 'auto'
    },
    blockquote: {
      paddingLeft: '16px',
    },
    pre: {
      overflow: 'auto'
    },
    code: {
      fontFamily: theme.fontFamily.mono,
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

import Typography from 'typography'
import theme from 'utils/theme'

const fontFamilyArray = value => value.replace(/[""&]+/g, '').split(', ')

const typography = new Typography({
  baseFontSize: '19px',
  baseLineHeight: 1.5,
  bodyFontFamily: fontFamilyArray(theme.fonts.sans),
  headerFontFamily: fontFamilyArray(theme.fonts.sans),
  scaleRatio: 1.6,
  headerLineHeight: 1.5,
  bodyColor: theme.colors.type.body,
  headerColor: theme.colors.type.header,
  headerWeight: theme.fontWeights.semibold,
  bodyWeight: theme.fontWeights.normal,
  boldWeight: theme.fontWeights.bold,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    body: {
      '-webkit-font-smoothing': 'antialiased'
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
      color: theme.colors.gray[4],
      borderLeft: `2px solid ${theme.colors.gray[1]}`
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

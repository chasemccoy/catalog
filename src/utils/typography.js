import Typography from 'typography'
import { colors } from 'utils/design'

const typography = new Typography({
  baseFontSize: '17px',
  baseLineHeight: 1.6,
  bodyFontFamily: [
    'Karla',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
  headerFontFamily: ['Karla', 'Georgia', 'serif'],
  scaleRatio: 2.2,
  headerLineHeight: 1.4,
  headerWeight: 600,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    body: {
      color: colors.text.body,
    },
    a: {
      WebkitTextDecorationSkip: 'unset',
    },
    'h1, h2, h3, h4, h5, h6': {
      color: colors.text.header,
    },
    '.gatsby-img': {
      marginBottom: '0.5em',
    },
    '.sans': {
      fontFamily: options.bodyFontFamily.join(`,`),
    },
    '.serif': {
      fontFamily: options.headerFontFamily.join(`,`),
    },
    blockquote: {
      paddingLeft: '16px',
    },
    code: {
      ...adjustFontSizeTo('1em'),
      backgroundColor: colors.primary.gray.light,
      borderRadius: '4px',
      padding: '4px 8px',
      display: 'inline-block',
      fontFamily: 'OperatorMono-Book, Inconsolata, Monaco, monospace',
      width: '100%',
      wordWrap: 'normal',
      overflow: 'auto'
    },
    'pre code': {
      padding: '8px 16px',
      background: '#31343F',
      color: colors.primary.gray.light,
    },
  }),
})

export default typography

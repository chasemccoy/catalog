import Typography from 'typography'
import { colors } from 'utils/design'

const typography = new Typography(
	{
		baseFontSize: '17px',
		baseLineHeight: 1.6,
		bodyFontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
		headerFontFamily: ['Karla', 'Georgia', 'serif'],
		scaleRatio: 2.2,
		headerLineHeight: 1.4,
		headerWeight: 600,
		overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
			a: {
				WebkitTextDecorationSkip: 'unset'
			},
			'h1, h2, h3, h4, h5, h6': {
				color: colors.text.header
			},
			'.sans': {
				fontFamily: options.bodyFontFamily.join(`,`)
			},
			'.serif': {
				fontFamily: options.headerFontFamily.join(`,`)
			},
			'blockquote': {
				paddingLeft: '16px'
			}
		})
	}
)

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography

import Typography from 'typography'

const typography = new Typography(
	{
		baseFontSize: '16px',
		baseLineHeight: 1.6,
		bodyFontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
		headerFontFamily: ['Lora', 'Georgia', 'serif'],
		scaleRatio: 2.3,
		headerLineHeight: 1.5,
		headerWeight: 600,
		overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
			a: {
				WebkitTextDecorationSkip: 'unset'
			},
			'.sans': {
				fontFamily: options.bodyFontFamily.join(`,`)
			},
			'.serif': {
				fontFamily: options.headerFontFamily.join(`,`)
			}
		})
	}
)

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography

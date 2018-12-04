import styled from 'styled-components'
import Text from 'components/Text'

const Heading = Text.withComponent('h1')

Heading.defaultProps = {
	fontFamily: 'serif'
}

Heading.h1 = Heading.withComponent('h1')
Heading.h2 = Heading.withComponent('h2')
Heading.h3 = Heading.withComponent('h3')
Heading.h4 = Heading.withComponent('h4')
Heading.h5 = Heading.withComponent('h5')
Heading.h6 = Heading.withComponent('h6')

Heading.section = styled(Heading.withComponent('h4'))`
	color: ${p => p.theme.name === 'light' ? p.theme.colors.page.text : p.theme.colors.accent.dark};
`

Heading.section.defaultProps = {
	fontFamily: 'mono',
	borderTop: '2px solid',
	pt: '6px',
	uppercase: true,
	fontSize: '14px',
	mb: '20px'
}

export default Heading

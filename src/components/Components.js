import styled, {injectGlobal} from 'styled-components'
import GatsbyLink from 'gatsby-link'
import {darken} from 'polished'
import { colors } from '../utils/design'

injectGlobal`
	body {
		color: ${colors.text.body};
		-webkit-font-smoothing: antialiased;
	}

	h1, h2, h3, h4, h5, h6 {
		color: ${colors.text.header} !important;
	}

	a {
		&:link {
			color: currentColor;
		}

		&:visited {
			color: currentColor;
		}

		&:hover {
			color: ${darken(0.2, colors.text.body)};
		}
	}
`

export const Link = styled(GatsbyLink)`
	&:hover {
		color: ${darken(0.2, colors.text.body)};
	}
`

export const Heading = styled.h3`
	color: ${colors.text.heading} !important;
	padding-bottom: 8px;
	border-bottom: 1px dashed ${colors.text.headingBorder};
`

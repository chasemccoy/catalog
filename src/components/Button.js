import styled from 'styled-components'
import { Text } from '@chasemccoy/kit'

const Button = styled(Text)`
	display: inline-block;
	border: none;
	margin: 0;
	text-decoration: none;
	cursor: pointer;
	text-align: left;
	-webkit-appearance: none;
	-moz-appearance: none;
	background: none;
	padding: 0;
	white-space: nowrap;
	text-decoration: ${p => p.unstyled ? 'none' : 'underline'};

	&:hover {
		color: ${p => p.theme.colors.accent.dark};
	}
`

Button.defaultProps = {
	as: 'button',
	color: 'accent'
}

export default Button

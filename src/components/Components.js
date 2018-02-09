import { colors, fontWeights } from 'utils/design'
import styled, { injectGlobal } from 'styled-components'

import GatsbyLink from 'gatsby-link'
import React from 'react'
import {darken} from 'polished'

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Karla:400,700');

	* {
		box-sizing: border-box;
	}

	body {
		color: ${colors.text.body};
		-webkit-font-smoothing: antialiased;
		overflow: hidden;
	}

	h1, h2, h3, h4, h5, h6 {
		color: ${colors.text.header};
	}

	a {
		transition: 0.3s all;

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

	p a, .e-content a {
		margin: -4px;
		padding: 4px;
		box-decoration-break: clone;

		&:hover {
			color: ${colors.primary.blue};
			background-color: #F5FAFF;
			border-radius: 4px;
			padding: 4px;
			text-decoration: none;
		}
	}

	img {
		margin: 0 !important;
		border-radius: 4px;
		height: auto;
	}

	pre {
		line-height: 1;
		tab-size: 2;
	}
`

const StyledLink = styled(GatsbyLink)`
	&:hover {
		color: ${darken(0.2, colors.text.body)};
	}
`

export const Link = props => {
	if (props.to.startsWith('http')) {
		return <a href={props.to} target='_blank' {...props}>{props.children}</a>
	}
	else if (props.to.startsWith('#') || props.to.startsWith('mailto')) {
		return <a href={props.to} {...props}>{props.children}</a>
	}
	else {
		return <StyledLink {...props}>{props.children}</StyledLink>
	}
}

export const Heading = styled.h3.attrs({
	className:  'sans'
})`
	margin: 0 0 24px;
	padding: 32px 0 8px;

	font-size: 16px;
	color: ${colors.card.text} !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${fontWeights.bold};

	a {
		text-decoration: none;
	}

	display: flex;
	align-items: center;

	&:after {
    content: '';
    flex: 1;
    border-bottom: 1px dashed ${colors.primary.gray.dark};
		margin-left: 16px;
	}
`

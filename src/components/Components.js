import React from 'react'
import GatsbyLink from 'gatsby-link'
import styled, { injectGlobal } from 'styled-components'
import { colors, fontWeights } from 'utils/design'
import { space } from 'styled-system'

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Karla:400,700');
	@import url('https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i');


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
			color: ${colors.primary.blue};
		}
	}

	p a, .e-content a {
		margin: -4px;
		padding: 4px;
		box-decoration-break: clone;

		&:hover {
			color: ${colors.primary.blue};
			background-color: ${colors.primary.lightBlue};
			border-radius: 4px;
			padding: 4px;
			text-decoration: none;
		}
	}

	img {
		margin: 0 !important;
		height: auto;
	}

	pre {
		line-height: 1;
		tab-size: 2;
	}

	blockquote {
		color: ${colors.card.text};
		border-left: 4px solid ${colors.primary.gray.dark};
	}

	.clear:after {
		content: "";
		display: table;
		clear: both;
	}

	.gatsby-img {
		margin: 0;
	}
`

export const Link = props => {
  if (props.to.startsWith('http')) {
    return (
      <a href={props.to} target="_blank" {...props}>
        {props.children}
      </a>
    )
  } else if (props.to.startsWith('#') || props.to.startsWith('mailto')) {
    return (
      <a href={props.to} {...props}>
        {props.children}
      </a>
    )
  } else {
    return <GatsbyLink {...props}>{props.children}</GatsbyLink>
  }
}

export const Heading = styled.h4`
  margin: 0 0 24px;
  padding: 32px 0 8px;

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

export const BlogHeader = styled.h2.attrs({
  className: 'sans',
})`
  font-size: 14px;
  color: ${colors.primary.purple} !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${fontWeights.bold};
  ${space};
`

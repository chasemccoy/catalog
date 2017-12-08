import React from 'react'
import styled from 'styled-components'
import { Link } from './Components'
import { colors, sizes } from '../utils/design'
import { media } from '../utils/media'

const largeMarginFix = () => {
  return `
		margin-left: ${'-' + sizes.library.padding.large};
		margin-right: ${'-' + sizes.library.padding.large};
  `;
}

const smallMarginFix = () => {
  return `
		width: calc(100% + ${sizes.library.padding.small} * 2);
		margin-left: ${'-' + sizes.library.padding.small};
		margin-right: ${'-' + sizes.library.padding.small};
  `;
}

const DivCard = styled.div`
	display: block;
  min-height: 100%;
	border-radius: 4px;
	background-color: ${props => props.highlight ? colors.bookmark.background : 'white'};
	border: ${props => props.highlight ? ('1px solid ' + colors.bookmark.border.outer) : '1px solid transparent'};

	${props => !props.highlight && largeMarginFix()};
	${props => !props.highlight && media.tiny`
		${smallMarginFix()}
	`}

	&:hover {
		background-color: ${colors.bookmark.background};
		border: 1px solid ${colors.bookmark.border.outer};
	}
`

const LinkComponent = DivCard.withComponent(Link)

const LinkCard = LinkComponent.extend`
	text-decoration: none;

	&:hover {
		transform: scale(1.02);
	}

	&:active {
		transform: translateY(2px);
	}
`

const Card = props => {
	if (props.to) {
		return <LinkCard to={props.to} {...props} />
	}
	else {
		return <DivCard {...props} />
	}
}

export default Card

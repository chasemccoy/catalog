import React from 'react'
import styled from 'styled-components'
import { Link } from './Components'
import { colors, sizes } from '../utils/design'
import { media } from '../utils/media'

const largeMarginFix = () => {
  return `
		margin-left: ${'-' + sizes.card.padding.large};
		margin-right: ${'-' + sizes.card.padding.large};
  `;
}

const smallMarginFix = () => {
  return `
		width: calc(100% + ${sizes.card.padding.small} * 2);
		margin-left: ${'-' + sizes.card.padding.small};
		margin-right: ${'-' + sizes.card.padding.small};
  `;
}

const DivCard = styled.div`
	display: block;
  min-height: 100%;
	border-radius: 4px;
  padding: ${sizes.card.padding.large};
	background-color: ${props => props.highlight ? colors.card.background : 'white'};
	border: ${props => props.highlight ? ('1px solid ' + colors.card.border) : '1px solid transparent'};
  color: ${colors.text.header};

	${props => !props.highlight && largeMarginFix()};
	${props => !props.highlight && media.tiny`
    padding: ${sizes.card.padding.small};
		${smallMarginFix()}
	`}

	&:hover {
		background-color: ${colors.card.background};
		border: 1px solid ${colors.card.border};
	}
`

const LinkComponent = DivCard.withComponent(Link)

const LinkCard = LinkComponent.extend`
	text-decoration: none;
  background-color: ${props => props.highlight ? colors.card.link.background : 'white'};
	border: ${props => props.highlight ? ('1px solid ' + colors.card.link.border) : '1px solid transparent'};

	&:hover {
		transform: scale(1.02);
    background-color: ${colors.card.link.background};
		border: 1px solid ${colors.card.link.border};
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

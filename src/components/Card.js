import { colors, sizes } from 'utils/design'
import { Link } from 'components/Components'
import React from 'react'
import { media } from 'utils/media'
import styled from 'styled-components'

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

const linkShadow = () => {
  return `
		0 2px 4px rgba(32, 52, 61, .03), 0 1px 2px rgba(0, 0, 0, .06), inset 0 0 0 1px ${colors.primary.gray.medium}
  `;
}

const DivCard = styled.div`
	display: block;
  min-height: 100%;
	border-radius: 4px;
  padding: ${sizes.card.padding.large};
	background-color: ${props => props.highlight ? colors.card.background : 'white'};
  box-shadow: inset 0 0 0 1px ${colors.card.shadow};
`

const LinkComponent = DivCard.withComponent(Link)

const LinkCard = LinkComponent.extend`
	text-decoration: none;
  background-color: ${props => props.highlight ? colors.primary.gray.light : 'white'};
  box-shadow: ${props => props.highlight ? linkShadow() : `none`};

	&:hover {
		transform: scale(1.02);
    background-color: ${colors.primary.gray.light};
		box-shadow: ${linkShadow()};
	}

	&:active {
		transform: translateY(2px);
	}

  ${props => !props.highlight && largeMarginFix()};

	${props => !props.highlight && media.tiny`
    padding: ${sizes.card.padding.small};
		${smallMarginFix()}
	`}
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

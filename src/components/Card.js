import React from 'react'
import styled from 'styled-components'
import { Link } from './Components'
import { colors, sizes } from '../utils/design'

const DivCard = styled.div`
	display: block;
	border-radius: 4px;

	background-color: ${props => props.highlight ? colors.bookmark.background : 'white'};
	border: ${props => props.highlight ? ('1px solid ' + colors.bookmark.border.outer) : '1px solid transparent'};

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

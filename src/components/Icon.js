import React from 'react'
import styled from 'styled-components'
import { colors, sizes } from '../utils/design'

const StyledIcon = styled.span`
	display: inline;
	flex-shrink: 0;
	width: ${props => props.small ? `18px` : `22px`};
	height: ${props => props.small ? `18px` : `22px`};
	margin: ${props => props.small ? `0 6px 0 0 ` : `-2px 4px 0 0 `};;

	img {
		margin: 0;
	}
`

const Icon = props => (
	<StyledIcon className={`icon ${props.name}`} small={props.small}>
		<img src={`${__PATH_PREFIX__}/icons/${props.name}.svg`} alt={props.name} />
	</StyledIcon>
)

export default Icon

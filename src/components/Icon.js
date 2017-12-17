import React from 'react'
import styled from 'styled-components'
import { colors, sizes } from '../utils/design'

const StyledIcon = styled.span`
	display: inline-flex;
	flex-shrink: 0;
	width: ${props => props.large ? `26px` : props.small ? `18px` : `22px`};
	height: ${props => props.large ? `26px` : props.small ? `18px` : `22px`};
	margin: ${props => props.large ? `1px 8px 0 0` : props.small ? `0 6px 0 0` : `-2px 4px 0 0`};

	img {
		margin: 0;
		height: 100%;
		width: 100%;
	}
`

const Icon = props => (
	<StyledIcon className={`icon ${props.name}`} {...props}>
		<img src={`${__PATH_PREFIX__}/icons/${props.name}.svg`} alt={props.name} />
	</StyledIcon>
)

export default Icon

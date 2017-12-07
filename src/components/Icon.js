import React from 'react'
import styled from 'styled-components'
import { colors, sizes } from '../utils/design'

const StyledIcon = styled.span`
	display: inline-block;
	flex-shrink: 0;
	width: 22px;
	height: 22px;
	margin: -2px 4px 0 0;

	img {
		margin: 0;
	}
`

export const Icon = props => (
	<StyledIcon className={`icon ${props.name}`}>
		<img src={`${__PATH_PREFIX__}/icons/${props.name}.svg`} alt={props.name} />
	</StyledIcon>
)

import { colors, sizes } from 'utils/design'

import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.object`
	display: inline-flex;
	flex-shrink: 0;
	height: ${props => props.large ? `1.1em` : `1.4em`};
	margin: ${props => props.large ? `-5px 8px 0 0` : props.small ? `-4px 6px 0 0` : `0 4px 0 0`} !important;
	vertical-align: middle;
`

const Icon = props => (
	<StyledIcon
		data={`${__PATH_PREFIX__}/icons/${props.name}.svg`}
		className={`icon ${props.name}`}
		{...props}
		type="image/svg+xml"
	>
		{props.name}
	</StyledIcon>
)

export default Icon

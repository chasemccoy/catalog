import { colors, sizes } from 'utils/design'
import React from 'react'
import styled from 'styled-components'
import sprite from '../sprite.svg';

const StyledIcon = styled.svg`
	height: ${props => props.large ? `1.1em` : `1.4em`};
	margin: ${props => props.large ? `-5px 8px 0 0` : props.small ? `-4px 6px 0 0` : `0 4px 0 0`} !important;
	vertical-align: middle;
	max-width: ${props => props.large ? `1.1em` : `1.4em`};
`

const Icon = props => (
	<StyledIcon className={`icon ${props.name}`} {...props}>
    <use xlinkHref={`${sprite}#icon-${props.name}`} />
  </StyledIcon>
)

export default Icon

import React from 'react'
import styled from 'styled-components'
import { colors, sizes } from '../utils/design'
import { media } from '../utils/media'
import {Icon} from './Icon'

export const Wrapper = styled.div.attrs({
	id: 'wrapper'
})`
`

export const Content = styled.div.attrs({
	id: 'content'
})`
	width: calc(100% - ${sizes.sidebar.width});
	max-width: calc(${sizes.content.maxWidth} + ${sizes.content.padding} * 2);
	min-height: 100vh;
	padding: 96px ${sizes.content.padding} 120px;

	${media.small`
		width: 100%;
		padding: 80px ${sizes.content.smallPadding} 0;
	`}
`

import React from 'react'
import styled from 'styled-components'
import { colors, sizes } from '../utils/design'
import {Icon} from './Icon'

export const Wrapper = styled.div.attrs({
	id: 'wrapper'
})`
	display: flex;
	align-items: stretch;
`

export const Content = styled.div.attrs({
	id: 'content'
})`
	width: calc(100% - ${sizes.sidebar.width});
	max-width: calc(850px + ${sizes.content.padding} * 2);
	min-height: 100vh;
	padding: 120px ${sizes.content.padding} 0;

	@media screen and (max-width: ${sizes.breakpoints.small}) {
		width: 100%;
		padding: 120px 32px 0;
	}
`

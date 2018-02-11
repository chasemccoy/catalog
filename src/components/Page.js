import Icon from 'components/Icon'
import React from 'react'
import { media } from 'utils/media'
import styled from 'styled-components'

const PageContainer = styled.div`
	${props => props.narrow && 'width: 68%;'}
	${props => props.wide && 'width: 125%;'}

	${props => (props.narrow || props.wide) && media.medium`
    width: 100%;
	`}
`

const PageTitle = styled.h2` 
	margin-bottom: 32px;
`

const Page = props => (
	<PageContainer {...props}>
		{props.title && (
			<PageTitle>
				{props.icon && <Icon large name={props.icon} /> }

				{props.title}
			</PageTitle>
		)}

		{props.children}
	</PageContainer>
)

export default Page

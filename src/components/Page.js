import Icon from 'components/Icon'
import React from 'react'
import { media } from 'utils/media'
import styled from 'styled-components'

const PageContainer = styled.div`
	${props => props.narrow && 'width: 65%;'}
	${props => props.wide && 'width: 132%;'}

	${props => (props.narrow || props.wide) && media.tiny`
    width: 100%;
	`}

	.icon {
		float: left;
	}
`

const PageTitle = styled.h2`
	margin-bottom: 32px;
`

const Page = props => (
	<PageContainer {...props}>
		{props.icon && <Icon large name={props.icon} /> }
		{props.title && <PageTitle>{props.title}</PageTitle>}

		{props.children}
	</PageContainer>
)

export default Page

import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/media'

const PageContainer = styled.div`
	margin: auto;

	${props => props.narrow && 'width: 75%;'}

	${props => props.narrow && media.tiny`
    width: 96%;
	`}
`

const PageTitle = styled.h2`
	margin-bottom: 32px;
`

const Page = props => (
	<PageContainer {...props}>
		{props.title && <PageTitle>{props.title}</PageTitle>}

		{props.children}
	</PageContainer>
)

export default Page

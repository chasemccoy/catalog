import Icon from 'components/Icon'
import React from 'react'
import { media } from 'utils/media'
import styled from 'styled-components'
import { space } from 'styled-system'

const PageContainer = styled.div`
	${props => props.narrow && 'width: 68%;'}
	${props => props.wide && 'width: 125%;'}

	${props => props.wide && media.large`
    width: 100%;
	`}

	${props => props.narrow && media.medium`
    width: 100%;
	`}

	${space}
`

const PageTitle = styled.h2`
	margin-bottom: 32px;
`

const Page = props => (
	<PageContainer {...props} title=''>
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

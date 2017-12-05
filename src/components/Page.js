import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`

`

const PageTitle = styled.h2`
	margin-bottom: 32px;
`

export default class Page extends React.Component {
	render() {
		return (
			<PageContainer>
				{this.props.title && <PageTitle>{this.props.title}</PageTitle>}

				{this.props.children}
			</PageContainer>
		)
	}
}

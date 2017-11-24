import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`

`

export default class Page extends React.Component {
	render() {
		return (
			<PageContainer>
				<h2>{this.props.title}</h2>

				{this.props.children}
			</PageContainer>
		)
	}
}

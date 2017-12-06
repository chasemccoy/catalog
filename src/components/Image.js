import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { colors, sizes } from '../utils/design'

const StyledImage = styled(Img)`
	border-radius: 4px;
	max-width: 100%;
	position: initial !important;
	margin-bottom: 0;

	${'' /* background: linear-gradient(to bottom, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 3%);
	box-shadow: 0 2px 6px 0 rgba(0,0,0,0.35); */}

	img {
		border-radius: 4px;
		margin-bottom: 0;
	}
`

const RegularImage = StyledImage.withComponent('img')

class Image extends React.Component {
	render() {
		if (this.props.src) {
			return <RegularImage {...this.props} />
		}
		else {
			return <StyledImage {...this.props} />
		}
	}
}

export default Image

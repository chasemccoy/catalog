import { Column, Row } from 'components/Grid'

import Img from 'gatsby-image'
import { Link } from 'components/Components'
import React from 'react'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
	.gatsby-image-outer-wrapper {
		flex-grow: 1;
	}
`

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

export const ImageDiv = StyledImage.withComponent('div')
export const ImageLink = StyledImage.withComponent(Link)

const RegularImage = StyledImage.withComponent('img')

class Image extends React.Component {
	render() {
		if (this.props.sizes && !this.props.cover) {
			return <Img {...this.props} />
		}
		else if (this.props.src && !this.props.to && !this.props.cover) {
			return <RegularImage {...this.props} />
		}
		else if (this.props.src && this.props.to) {
			return <ImageLinkContainer {...this.props} />
		}
		else if (this.props.src && this.props.cover) {
			return <ImageContainer {...this.props} />
		}
		else {
			return <StyledImage {...this.props} />
		}
	}
}

export default Image

const ShowcaseImageStyles = src => {
  return `
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    padding-bottom: 100%;
  `;
}

const ImageContainer = styled(ImageDiv)`
  ${props => ShowcaseImageStyles(props.src)}
`

const ImageLinkContainer = styled(ImageLink)`
  display: block;
  ${props => ShowcaseImageStyles(props.src)}
	${props => props.stretch && `height: 100%;`}
`

export const ImageShowcase = props => {
  const first = props.children[0]
  const second = props.children[1]
  const third = props.children[2]

  const Container = first.props.to ? ImageLinkContainer : ImageContainer

  const primary = (
    <Column width={[2/3]} {...props}>
      {first.props.src && <Container to={first.props.to} src={first.props.src} />}
    </Column>
  )

  const secondary = (
    <Column width={[1/3]}>
      <Row>
        <Column width={[1]}>
          {second.props.src && <Container to={second.props.to} src={second.props.src} />}
        </Column>
      </Row>

      <Row mt={'-1px'}>
        <Column width={[1]}>
          {third.props.src && <Container to={third.props.to} src={third.props.src} />}
        </Column>
      </Row>
    </Column>
  )

  return (
    <Row {...props}>
      {!props.right && primary}

      {secondary}

      {props.right && primary}
    </Row>
  )
}

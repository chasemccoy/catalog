import React from 'react'
import styled, { css } from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image";
import Link from 'components/Link'
import { borderRadius, space } from 'styled-system'

const StyledImage = styled(GatsbyImage)`
  margin-bottom: 0;

  img {
    margin-bottom: 0;
    ${borderRadius}
  }

  ${borderRadius}
  ${space}
`

export const ImageDiv = StyledImage.withComponent('div')
export const ImageLink = StyledImage.withComponent(Link)

const RegularImage = StyledImage.withComponent('img')

const ShowcaseImageStyles = src => {
  return css`
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    padding-bottom: 100%;
  `
}

const ImageContainer = styled(ImageDiv)`
  ${props => ShowcaseImageStyles(props.src)};
`

const ImageLinkContainer = styled(ImageLink)`
  display: block;
  ${props => ShowcaseImageStyles(props.src)} ${props =>
    props.stretch && `height: 100%;`};
`

class Image extends React.Component {
  render() {
    if (this.props.image) {
      return <StyledImage {...this.props} />
    } else if (this.props.src && this.props.to) {
      return <ImageLinkContainer className='no-invert' {...this.props} />
    } else if (this.props.src && this.props.cover) {
      return <ImageContainer {...this.props} />
    } else if (this.props.src) {
      return <RegularImage {...this.props} />
    } else {
      return <StyledImage {...this.props} />
    }
  }
}

export default Image

import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'components/Link'
import { borderRadius } from 'styled-system'

const StyledImage = styled(Img)`
  border-radius: 4px;
  max-width: 100%;
  position: initial !important;
  margin-bottom: 0;

  img {
    border-radius: 4px;
    margin-bottom: 0;
    ${borderRadius}
  }

  ${borderRadius}
`

export const ImageDiv = StyledImage.withComponent('div')
export const ImageLink = StyledImage.withComponent(Link)

const RegularImage = StyledImage.withComponent('img')

const ShowcaseImageStyles = src => {
  return `
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
    if (this.props.sizes) {
      return <StyledImage {...this.props} outerWrapperClassName="gatsby-img" />
    } else if (this.props.src && this.props.to) {
      return <ImageLinkContainer {...this.props} />
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

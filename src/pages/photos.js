import React from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import { graphql } from 'gatsby'
import { Box } from 'components/Base'
import Image from 'components/Image'
import Masonry from 'react-masonry-component'
import Lightbox from 'react-images'
import Link from 'components/Link'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  width: 100vw;
  display: block;

  .gatsby-img {
    width: 400px;
  }

  .masonry {
    margin: 0 auto;
  }
`

const ImageContainer = styled(Box)`
  border-radius: 4px;
  overflow: hidden;
  cursor: zoom-in;
`

class PhotosPage extends React.Component {
  state = {
    currentImage: 0,
    isOpen: false
  }

  images = this.props.data.photos.edges.sort((a, b) => a.node.fields.exif.date - b.node.fields.exif.date).reverse()

  photos = this.images.map(({node}) => (
    {
      src: node.childImageSharp.original.src,
      caption: `Taken on ${node.fields.exif.prettyDate} with ${node.fields.exif.lensModel}`
    }
  ))

  handleClick = index => {
    this.setState({
      currentImage: index,
      isOpen: true
    })
  }

  closeLightbox = () => {
    this.setState({isOpen: false})
  }

  previousImage = () => {
    this.setState({currentImage: this.state.currentImage - 1})
  }

  nextImage = () => {
    this.setState({currentImage: this.state.currentImage + 1})
  }

  render() {
    return (
      <Layout title='Photos' dark>
        <Box height='100px' p={16}>
          <Link to='/' color='white'>Back</Link>
        </Box>

        <Container p={16}>
          <Masonry className='masonry' options={{columnWidth: 400, gutter: 8, fitWidth: true, transitionDuration: 0}} style={{width: '100%'}}>
            {this.props.data.photos.edges.map(({node}, i) => (
              <ImageContainer mb={'8px'} onClick={() => this.handleClick(i)} key={i}>
                <Image sizes={node.childImageSharp.fluid} />
              </ImageContainer>
            ))}
          </Masonry>

          <Lightbox
            images={this.photos}
            currentImage={this.state.currentImage}
            isOpen={this.state.isOpen}
            onClickPrev={this.previousImage}
            onClickNext={this.nextImage}
            onClose={this.closeLightbox}
            showImageCount={false}
            backdropClosesModal={true}
          />
        </Container>
      </Layout>
    )
  }
}

export default PhotosPage

export const query = graphql`
  query PhotosQuery {
    photos: allFile(
      filter: {sourceInstanceName: {eq: "photos"}, extension: {ne: ""}},
      sort: {fields: fields___exif___date, order: DESC}
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }

            original {
              src
              width
              height
            }
          }

          fields {
            exif {
              prettyDate: date(formatString: "MMMM D, YYYY")
              date(formatString: "x")
              lensModel
            }
          }
        }
      }
    }
  }
`

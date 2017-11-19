import React from 'react'
import Helmet from 'react-helmet'
import {Image} from '../components/Image'
import {PostTitle} from '../components/Components'
import {ImageGrid} from '../components/Grid'

const GalleryPage = ({data}) => {
  return (
    <div>
      <Helmet title={`${data.post.frontmatter.title} | Chase McCoy`} />

      <PostTitle>{data.post.frontmatter.title}</PostTitle>

      <div dangerouslySetInnerHTML={{ __html: data.post.html }} />

      <ImageGrid mb={4}>
        {data.images.edges.map(({node}) =>
          <div key={node.id}>
            <Image sizes={node.childImageSharp.sizes} />
          </div>
        )}
      </ImageGrid>
    </div>
  )
}

export default GalleryPage

export const query = graphql`
  query GalleryQuery($parent: String) {
    images: allFile(
    filter: {
      fields: {
        parent: {eq: $parent}
      },
      internal: {
        mediaType: {glob: "image/*"}
      }
    }
  ) {
      edges {
        node {
          id
          childImageSharp {
            sizes(maxWidth: 850) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
          relativePath
          internal {
            mediaType
          }
        }
      }
    },
    post: markdownRemark(
    fields: {
      slug: {eq: $parent}
    }
    ) {
        html
        frontmatter {
          title
        }
    }
  }
`

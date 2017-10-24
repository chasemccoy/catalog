import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import {PostTitle} from '../components/Components'

const GalleryPage = ({data}) => {
  return (
    <div>
      <Helmet title={`${data.post.frontmatter.title} | Chase McCoy`} />

      <PostTitle>{data.post.frontmatter.title}</PostTitle>

      <div dangerouslySetInnerHTML={{ __html: data.post.html }} />

      {data.images.edges.map(({node}) =>
        <div key={node.id}>
          <Img sizes={node.childImageSharp.sizes} />
        </div>
      )}
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
        mediaType: {eq: "image/png"}
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

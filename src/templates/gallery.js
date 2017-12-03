import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import Image from '../components/Image'
import {ImageGrid, ShowcaseGrid} from '../components/Grid'

const GalleryPage = ({data}) => {
  return (
    <Page title={data.post.frontmatter.title}>
      <Helmet title={`${data.post.frontmatter.title} | Chase McCoy`} />

      <div dangerouslySetInnerHTML={{ __html: data.post.html }} />

      <ShowcaseGrid>
        {data.images.edges.map(({node}) =>
          <div key={node.id}>
            <Image sizes={node.childImageSharp.sizes} />
          </div>
        )}
      </ShowcaseGrid>

      <ShowcaseGrid right mt={'4'}>
        {data.images.edges.map(({node}) =>
          <div key={node.id}>
            <Image sizes={node.childImageSharp.sizes} />
          </div>
        )}
      </ShowcaseGrid>

      <ImageGrid my={'4'}>
        {data.images.edges.map(({node}) =>
          <div key={node.id}>
            <Image sizes={node.childImageSharp.sizes} />
          </div>
        )}
      </ImageGrid>
    </Page>
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
            sizes(maxWidth: 750) {
              ...GatsbyImageSharpSizes_withWebp
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

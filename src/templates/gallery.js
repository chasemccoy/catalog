import Helmet from 'react-helmet'
import Image from 'components/Image'
import { ImageGrid } from 'components/Grid'
import { ImageShowcase } from 'components/Image'
import Page from 'components/Page'
import React from 'react'

const GalleryPage = ({data}) => {
  return (
    <Page title={data.post.frontmatter.title}>
      <Helmet title={`${data.post.frontmatter.title} | Chase McCoy`} />

      <div dangerouslySetInnerHTML={{ __html: data.post.html }} />

      <ImageShowcase mb={24}>
        {data.images.edges.map(({node}) =>
          <Image src={node.childImageSharp.sizes.src} key={node.id} />
        )}
      </ImageShowcase>

      <ImageShowcase right mb={24}>
        {data.images.edges.map(({node}) =>
          <Image src={node.childImageSharp.sizes.src} key={node.id} />
        )}
      </ImageShowcase>

      <ImageGrid>
        {data.images.edges.map(({node}) =>
          <div key={node.id}>
            <Image src={node.childImageSharp.sizes.src} key={node.id} />
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

import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import { Link } from '../components/Components'
import { Row, Column } from '../components/Grid'
import { Post } from '../components/Blog'
import Image from '../components/Image'
import { ImageShowcase } from '../components/Image'
import Divider from '../components/Divider'
import { colors, fontWeights } from '../utils/design'

const Header = styled.h2`
  font-size: 14px;
  color: ${colors.primary.purple} !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${fontWeights.bold};
`

const BlogPage = ({data}) => {
  return (
    <Page narrow>
      <Header>Recent Images</Header>
      <ImageShowcase mb={40}>
        {data.images.edges.map(({node}, i) =>
          <Image src={node.source_url} to={`/${data.imagePosts.edges[i].node.slug}`} key={i} />
  			)}
      </ImageShowcase>

      <Header>Thoughts</Header>
      {data.posts.edges.map(({node}, i) => (
        node.format != 'image' && (
          <Row key={i}>
            <Column mb={40} width={1}>
              {node.format == 'aside' &&
                <Post
                  aside
                  to={node.slug}
                  content={node.content}
                  date={node.date}
                />
              }

              {node.format == 'standard' &&
                <Post
                  title={node.title}
                  to={node.slug}
                  date={node.date}
                  excerpt={node.excerpt}
                />
              }

              {node.format == 'image' && null}
            </Column>

            <Column mb={40} width={1}><Divider /></Column>
          </Row>
        )
      ))}
    </Page>
  )
}

export default BlogPage

export const query = graphql`
  query BlogQuery {
    posts: allWordpressPost {
      edges {
        node {
          title
          date(formatString: "MMM D")
          slug
          format
          content
          excerpt
        }
      }
    }

    images: allWordpressWpMedia(limit: 3) {
      edges {
        node {
          source_url
        }
      }
    }

    imagePosts: allWordpressPost(limit: 3, filter: {format: {eq: "image"}}) {
      edges {
        node {
          slug
        }
      }
    }
  }
`

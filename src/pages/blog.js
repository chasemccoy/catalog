import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import { Link } from '../components/Components'
import { Row, Column } from '../components/Grid'
import { Post } from '../components/Blog'
import Image from '../components/Image'
import { ImageShowcase } from '../components/Image'
import { colors } from '../utils/design'

const Divider = styled.hr`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  height: 2px;
  background-color: ${colors.sidebar.link.hover}
`

const BlogPage = ({data}) => {
  return (
    <Page narrow>
      <ImageShowcase mb={24}>
        {data.images.edges.map(({node}, i) =>
          <Image src={node.source_url} to={`/${data.imagePosts.edges[i].node.slug}`} key={i} />
  			)}
      </ImageShowcase>

      {data.posts.edges.map(({node}, i) => (
        node.format != 'image' && (
          <Row key={i}>
            <Column mb={24} width={1}>
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

            <Column mb={24} width={1}><Divider /></Column>
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

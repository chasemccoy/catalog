import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import { Link } from '../components/Components'
import { Row, Column } from '../components/Grid'
import { Post } from '../components/Blog'

const BlogPage = ({data}) => {
  return (
    <Page narrow>
      {data.posts.edges.map(({node}, i) => (
        node.format != 'image' && (<Row mb={40} key={i}>
          <Column>
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
        </Row>)
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
  }
`

import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/Grid'
import Divider from 'components/Divider'
import Link from 'components/Link'
import Page from 'components/Page'
import { Post } from 'components/Blog'
// import QuickLinks from 'components/QuickLinks'
import { graphql } from 'gatsby'

const PaginationLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 8px;
  display: block;
  text-decoration: none;

  & + & {
    margin-left: 24px;
  }
`

const BlogPage = ({ data, pageContext }) => {
  const { nodes, prev, next } = pageContext

  return (
    <Page title={'Thoughts'} narrow untitled description="What's on my mind, and links to some interesting stuff on the web.">
      {nodes.map(({ node }, i) => (
        <Row key={i}>
          <Column mb={24} width={1}>
            {/* {i === 2 && (
              <div>
                <QuickLinks data={data.dropmark.edges} />
                <Column mt={24} mb={48} width={1}>
                  <Divider />
                </Column>
              </div>
            )} */}

            {(node.format === 'aside' || node.format === 'image') && (
              <Post
                aside
                to={node.slug}
                content={node.content}
                date={node.date}
                imagePost={node.format === 'image'}
              />
            )}

            {node.format === 'standard' && (
              <Post
                title={node.title}
                to={node.slug}
                date={node.date}
                content={node.content}
                excerpt={node.excerpt}
              />
            )}
          </Column>

          <Column mb={24} width={1}>
            <Divider />
          </Column>
        </Row>
      ))}

      <Row>
        {prev && <PaginationLink to={prev}>Newer</PaginationLink>}
        {next && <PaginationLink to={next}>Older</PaginationLink>}
      </Row>
    </Page>
  )
}

export default BlogPage

export const query = graphql`
  query BlogQuery {
    images: allWordpressWpMedia {
      edges {
        node {
          source_url
          post
        }
      }
    }

    imagePosts: allWordpressPost(
      limit: 3
      filter: { format: { eq: "image" } }
    ) {
      edges {
        node {
          slug
        }
      }
    }

    # dropmark: allDropmark(limit: 20, sort: { fields: [date], order: DESC }) {
    #   edges {
    #     node {
    #       title
    #       description
    #       link
    #       date
    #       preview_url
    #       collection
    #     }
    #   }
    # }
  }
`

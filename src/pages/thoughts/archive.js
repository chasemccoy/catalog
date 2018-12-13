import React from 'react'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import { Box } from 'components/Base'
import { graphql } from 'gatsby'

const ArchivePage = ({ data }) => {
  return (
    <Page title={'Archive'}>
      {data.posts.edges.map(({ node }) => (
        <React.Fragment key={node.id}>
          {node.format !== 'image' && (
            <Box mb={[80]}>
              <Post
                title={node.title}
                to={node.fields.fullSlug}
                date={node.date}
                content={node.content}
                excerpt={node.excerpt}
              />
            </Box>
          )}
        </React.Fragment>
      ))}
    </Page>
  )
}

export default ArchivePage

export const query = graphql`
  query ArchiveQuery {
    posts: allWordpressPost {
      edges {
        node {
          id
          title
          date(formatString: "MMMM Do, YYYY")
          fields {
            fullSlug
          }
          format
          content
          excerpt
          categories {
            name
          }
        }
      }
    }
  }
`

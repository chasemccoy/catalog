import React from 'react'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import { Box } from 'components/Base'
import { graphql } from 'gatsby'

const ArchivePage = ({ data }) => {
  return (
    <Page title={'Archive'}>
      {data.posts.edges.map(({node}, i) => (
        <React.Fragment key={i}>
          {node.format !== 'image' && (
            <Box mb={[80]}>
              <Post
                title={node.title}
                to={node.slug}
                date={node.date}
                content={node.content}
                excerpt={node.excerpt}
                aside={node.format === 'aside' ? true : false}
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
          slug
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

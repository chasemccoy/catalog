import React from 'react'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import { Box } from '@chasemccoy/kit'
import { graphql } from 'gatsby'

const ThoughtsPage = ({ data }) => {
  return (
    <Page
      title='Thoughts'
      description="What's on my mind, and links to some interesting stuff on the web."
      untitled
    >
      <Box mt={-24}>
        {data.posts.nodes.map((node) => (
          <React.Fragment key={node.id}>
            <Box as='article' mb={[120, null, null, 88]}>
              <Post
                title={node.title}
                to={node.slug}
                content={node.content}
                excerpt={node.excerpt}
                date={node.date}
                isMdx={node.isMdx}
                tags={node.tags}
              />
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Page>
  )
}

export default ThoughtsPage

export const query = graphql`
  query ThoughtsLabsQuery {
    posts: allBlog(
      filter: { format: { nin: ["image"] } }
      sort: { fields: date, order: DESC }
      limit: 50
    ) {
      nodes {
        id
        title
        date(formatString: "MMMM Do")
        slug
        content
        excerpt
        tags {
          name
        }
        isMdx
      }
    }

    olderPosts: allBlog(
      filter: { format: { eq: "standard" } }
      sort: { fields: date, order: DESC }
      limit: 8
    ) {
      nodes {
        id
        title
        slug
      }
    }
  }
`

import React from 'react'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import { Box } from '@chasemccoy/kit'
import { graphql } from 'gatsby'
import Wide from 'components/Wide'

const ThoughtsPage = ({ data }) => {
  return (
    <Page
      title='Thoughts'
      description="What's on my mind, and links to some interesting stuff on the web."
      untitled
    >
      <Box mt={-64}>
        {data.posts.nodes.map((node) => (
          <React.Fragment key={node.id}>
            <Box as='article' mb={[-40, null, null, -24]}>
              <Post
                title={node.title}
                to={node.slug}
                content={node.content}
                excerpt={node.excerpt}
                date={node.date}
                isMdx={node.isMdx}
                tags={node.tags}
                aside={node.format === 'aside'}
              />

              <Wide right={false}>
                <Box
                  height='8px'
                  width={1}
                  mt={[88, null, null, 120]}
                  bg='accent.pop'
                />
              </Wide>
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
      filter: { format: { nin: ["image", "aside"] } }
      sort: { fields: date, order: DESC }
      limit: 20
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
        format
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

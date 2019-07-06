import React from 'react'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import { Box } from '@chasemccoy/kit'
import { graphql } from 'gatsby'

const ThoughtsPage = ({ data }) => {
  return (
    <Page
      title='Thoughts'
      untitled
      description="What's on my mind, and links to some interesting stuff on the web."
    >
      <Box>
        {data.posts.nodes.map(node => (
          <React.Fragment key={node.id}>
            <Box mb={[40, 40, 48]}>
              <Post
                title={node.title}
                to={node.slug}
                content={node.content}
                date={node.date}
                isMdx={node.isMdx}
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
  query ThoughtsQuery {
    posts: allBlog(
      filter: { format: { nin: ["image"] } }
      sort: { fields: date, order: DESC }
      limit: 50
    ) {
      nodes {
        id
        title
        date(formatString: "MMM D")
        slug
        content
        excerpt
        isMdx
      }
    }
  }
`

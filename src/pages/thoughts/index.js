import React from 'react'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import { Box } from '@chasemccoy/kit'
import { graphql } from 'gatsby'
import Link from 'components/Link'
import { UnorderedList } from 'components/Lists'

const Sidebar = ({ posts, ...props }) => (
  <React.Fragment>
    <Page.SidebarHeader mb={12}>Recently</Page.SidebarHeader>

    <UnorderedList>
      {posts.map((post) => (
        <Box as='li' key={post.id}>
          <Link
            unstyled
            to={post.slug}
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
        </Box>
      ))}
    </UnorderedList>
  </React.Fragment>
)

const ThoughtsPage = ({ data }) => {
  return (
    <Page
      title='Thoughts'
      description="What's on my mind, and links to some interesting stuff on the web."
      // aside={<Sidebar posts={data.olderPosts.nodes} />}
      untitled
    >
      <Box mt={-24}>
        {data.posts.nodes.map((node) => (
          <React.Fragment key={node.id}>
            <Box as='article' mb={[40, 40, 48]}>
              <Post
                title={node.title}
                to={node.slug}
                content={node.content}
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

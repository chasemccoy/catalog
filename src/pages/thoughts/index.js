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
      {posts.map(post => (
        <Box as='li' key={post.id}>
          <Link
            unstyled
            to={post.slug}
            dangerouslySetInnerHTML={{ __html: post.title + '&nbsp;→' }}
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
      untitled
      description="What's on my mind, and links to some interesting stuff on the web."
      header={<Page.Header />}
      sidebar={<Sidebar posts={data.olderPosts.nodes} />}
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
  query ThoughtsQuery {
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
        tags
        isMdx
      }
    }

    olderPosts: allBlog(filter: { format: { eq: "standard" } }, limit: 8) {
      nodes {
        id
        title
        slug
      }
    }
  }
`

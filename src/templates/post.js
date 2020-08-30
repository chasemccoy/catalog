import Page from 'components/Page'
import { Box, Text } from '@chasemccoy/kit'
import { Post } from 'components/Blog'
import React from 'react'
import { graphql } from 'gatsby'
import Link from 'components/Link'
import Tags from 'components/Tags'

const Sidebar = ({ items, tags, date }) => {
  const hasRelatedItems = items && items.length !== 0

  return (
    <Text fontSize='0.8em'>
      <Box mb={tags || hasRelatedItems ? 24 : 0}>
        <Page.SidebarHeader>Published</Page.SidebarHeader>
        <Text>{date}</Text>
      </Box>

      {tags && (
        <Box mb={hasRelatedItems ? 24 : 0}>
          <Page.SidebarHeader>Tags</Page.SidebarHeader>
          <Tags items={tags} />
        </Box>
      )}

      {hasRelatedItems && (
        <React.Fragment>
          <Page.SidebarHeader>Related</Page.SidebarHeader>

          {items.map((item, i) => (
            <Box key={i} mb={8}>
              <Link
                unstyled
                to={item.slug}
                color='gray.4'
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </Box>
          ))}
        </React.Fragment>
      )}
    </Text>
  )
}

export default ({ data, pageContext }) => {
  const post = data.blog
  const normalizedTitle = post.title ? post.title.replace(/&nbsp;/g, ' ') : null

  return (
    <Page
      title={normalizedTitle}
      article
      description={post.excerpt}
      header={null}
      aside={
        <Sidebar
          items={data.relatedPosts.nodes}
          tags={post.tags}
          date={post.date}
        />
      }
    >
      <Post
        untitled
        title={post.title}
        content={post.content}
        date={post.date}
        imagePost={post.format === 'image'}
        to={post.slug}
        tags={post.tags}
        isMdx={post.isMdx}
      />
    </Page>
  )
}

export const query = graphql`
  query PostQuery($id: String!, $tags: [String!]) {
    blog(id: { eq: $id }) {
      title
      content
      excerpt
      format
      date(formatString: "MMMM Do, YYYY")
      slug
      shortSlug
      tags {
        name
      }
      isMdx
    }

    relatedPosts: allBlog(
      filter: {
        tags: { elemMatch: { id: { in: $tags } } }
        title: { ne: null }
        id: { ne: $id }
      }
    ) {
      nodes {
        title
        slug
      }
    }
  }
`

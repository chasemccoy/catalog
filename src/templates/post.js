import Page from 'components/Page'
import { Post } from 'components/Blog'
import React from 'react'
import { graphql } from 'gatsby'
import Sidebar from 'components/Sidebar'

export default ({ data, pageContext }) => {
  const post = data.blog

  return (
    <Page
      title={post.title}
      article
      description={post.excerpt}
      aside={
        <Sidebar
          description={post.excerpt}
          relatedItems={data.relatedPosts.nodes}
          tags={post.tags}
          publishDate={post.date}
        />
      }
    >
      <Post
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

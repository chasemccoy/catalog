import Page from 'components/Page'
import { Post } from 'components/Blog'
import React from 'react'
import { graphql } from 'gatsby'

export default ({ data, pageContext }) => {
  const post = data.blog
  const normalizedTitle = post.title
    ? post.title.replace(/&nbsp;/g, ' ')
    : post.shortSlug

  return (
    <Page
      title={normalizedTitle}
      untitled
      article
      header={
        <Page.Header>
          <Post.Header
            title={post.title}
            to={post.slug}
            date={post.date}
            tags={post.tags}
          />
        </Page.Header>
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
  query PostQuery($id: String!) {
    blog(id: { eq: $id }) {
      title
      content
      format
      date(formatString: "MMMM Do, YYYY")
      slug
      shortSlug
      tags {
        name
      }
      isMdx
    }
  }
`

import Page from 'components/Page'
import { Post } from 'components/Blog'
import React from 'react'
import Helmet from 'react-helmet'

export default ({ data }) => {
  const post = data.wordpressPost

  return (
    <Page narrow title={post.title}>
      <Helmet title={`${post.title || post.slug} | Chase McCoy`} />

      <Post content={post.content} date={post.date} aside={post.format === 'aside'} />
    </Page>
  )
}

export const query = graphql`
  query WPPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      format
      date(formatString: "MMMM Do, YYYY")
      slug
    }
  }
`

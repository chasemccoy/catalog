import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import { Post } from '../components/Blog'

export default ({ data }) => {
  const post = data.wordpressPost

  return (
    <Page narrow title={post.title}>
      <Post
        content={post.content}
        date={post.date}
      />
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
    }
  }
`

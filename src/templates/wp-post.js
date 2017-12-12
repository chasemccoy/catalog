import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'

export default ({ data }) => {
  const post = data.wordpressPost

  return (
    <Page title={post.title}>
      {post.title && <Helmet title={`${post.title} | Chase McCoy`} />}

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Page>
  )
}

export const query = graphql`
  query WPPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`

import Page from 'components/Page'
import { Post } from 'components/Blog'
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

const isPhotoset = categories => {
  return categories.map(category => (
    Object.values(category).includes('Photoset')
  )).includes(true)
}

export default ({ data }) => {
  const post = data.wordpressPost

  return (
    <Page narrow untitled>
      <Helmet title={`${post.title || post.slug} | Chase McCoy`} />

      <Post
        title={post.title}
        content={post.content}
        date={post.date}
        // aside={post.format === 'aside' || post.format === 'image'}
        imagePost={post.format === 'image'}
        photoset={isPhotoset(post.categories)}
        to={post.slug}
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
      slug
      categories {
        name
      }
    }
  }
`

import Page from 'components/Page'
import { Post } from 'components/Blog'
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

const isPhotoset = categories => {
  return categories
    .map(category => Object.values(category).includes('Photoset'))
    .includes(true)
}

export default ({ data, pageContext }) => {
  const post = data.wordpressPost
  const normalizedTitle = post.title.replace(/&nbsp;/g, ' ')

  return (
    <Page narrow untitled hidden={pageContext.hidden}>
      <Helmet title={`${normalizedTitle || post.slug}`} />

      <Post
        title={post.title}
        content={post.content}
        date={post.date}
        imagePost={post.format === 'image'}
        photoset={post.categories && isPhotoset(post.categories)}
        to={post.fields.fullSlug}
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
      fields {
        fullSlug
      }
      categories {
        name
      }
    }
  }
`

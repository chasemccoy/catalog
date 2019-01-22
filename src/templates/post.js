import Page from 'components/Page'
import { Post } from 'components/Blog'
import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

export default ({ data, pageContext }) => {
  const post = data.blog
  const normalizedTitle = post.title ? post.title.replace(/&nbsp;/g, ' ') : post.shortSlug

  return (
    <Page title={normalizedTitle} narrow untitled hidden={pageContext.hidden} article={true}>
      {pageContext.hidden && (
        <Helmet>
          <link rel='canonical' href={`/${post.slug}`} />
        </Helmet>
      )}
      
      <Post
        title={post.title}
        content={post.content}
        date={post.longDate}
        imagePost={post.format === 'image'}
        to={post.slug}
        tags={post.tags}
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
      tags
    }
  }
`

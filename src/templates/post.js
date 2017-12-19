import Helmet from 'react-helmet'
import {PostTitle} from 'components/Components'
import React from 'react'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | Chase McCoy`} />

      <PostTitle>{post.frontmatter.title}</PostTitle>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

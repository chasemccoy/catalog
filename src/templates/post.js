import Helmet from 'react-helmet'
import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | Chase McCoy`} />

      <h2>{post.frontmatter.title}</h2>

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

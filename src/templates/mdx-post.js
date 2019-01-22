import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Page from 'components/Page'
import { Post } from 'components/Blog'

const MdxPageTemplate = ({ data: { mdx } }) => {
  return (
    <Page title={mdx.frontmatter.title} narrow untitled>
      <Post
        title={mdx.frontmatter.title}
        render={<MDXRenderer>{mdx.code.body}</MDXRenderer>}
        date={mdx.frontmatter.longDate}
        to={mdx.fields.slug}
      />
    </Page>
  )
}

export default MdxPageTemplate

export const pageQuery = graphql`
  query MdxPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      ...mdxPost
    }
  }
`
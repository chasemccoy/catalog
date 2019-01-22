import { graphql } from 'gatsby'

export const WordpressPosts = graphql`
  fragment post on wordpress__POST {
    id
    title
    rawDate: date
    longDate: date(formatString: "MMMM Do, YYYY")
    date(formatString: "MMM D")
    fields {
      fullSlug
    }
    format
    content
    excerpt
    categories {
      name
    }
  }
`

export const MdxPosts = graphql`
  fragment mdxPost on Mdx {
    id
    frontmatter {
      title
      rawDate: date
      longDate: date(formatString: "MMMM Do, YYYY")
      date(formatString: "MMM D")
      excerpt
    }
    fields {
      slug
    }
    code {
      body
    }
  }
`
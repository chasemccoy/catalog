import React from 'react'
import {Link, PostTitle} from '../components/Components'
import Bookmark from '../components/Bookmark'
import {BookmarkGrid} from '../components/Grid'

const IndexPage = ({data}) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({node}) =>
        <div key={node.id}>
          <article>
            <PostTitle>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </PostTitle>

            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </article>
        </div>
      )}
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          timeToRead
          html
        }
      }
    }
  }
`

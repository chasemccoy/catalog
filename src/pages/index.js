import React from 'react'
import Page from '../components/Page'
import {Link, PostTitle} from '../components/Components'
import Bookmark from '../components/Bookmark'
import {BookmarkGrid} from '../components/Grid'

const IndexPage = ({data}) => {
  return (
    <Page
      title='Chase McCoy is a design developer living in Chicago that spends a lot of time thinking about how the web looks.'
    >
      {data.allMarkdownRemark.edges.map(({node}) =>
        <div key={node.id}>
          <article>
            <h3>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h3>

            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </article>
        </div>
      )}
    </Page>
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

import React from 'react'
import {Link, PostTitle} from '../components/Components'
import Bookmark from '../components/Bookmark'
import {BookmarkGrid} from '../components/Grid'

const IndexPage = ({data}) => {
  return (
    <div>
      <BookmarkGrid mb={4}>
        <Bookmark title='Bookmark Title Here' url='http://macstories.net'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Bookmark>

        <Bookmark title='Bookmark Title Here' url='http://brooksreview.net'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Bookmark>

        <Bookmark title='Bookmark Title Here' url='http://macstories.net'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Bookmark>

        <Bookmark title='Bookmark Title Here' url='http://sduhsfewugrr.net'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Bookmark>
      </BookmarkGrid>

      {data.allMarkdownRemark.edges.map(({node}) =>
        <div key={node.id}>
          <article>
            <Link to={node.fields.slug}>
              <PostTitle>{node.frontmatter.title}</PostTitle>
            </Link>

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

import React from 'react'
import Page from '../components/Page'
import Bookmark from '../components/Bookmark'
import { Heading } from '../components/Components'
import { BookmarkGrid } from '../components/Grid'

const BookmarkPage = ({data}) => {
  return (
    <Page title='Bookmarks'>
      {data.allBookmarksJson.edges.map(({node}, index1) =>
        <div key={index1}>
          <Heading>{node && node.category}</Heading>
          <BookmarkGrid mb={4}>
            {node.bookmarks && node.bookmarks.map(({url, comment}, index2) =>
              url &&
              <Bookmark
                key={`${index1}${index2}`}
                url={url}
                comment={comment}
              />
            )}
          </BookmarkGrid>
        </div>
      )}
    </Page>
  )
}

export default BookmarkPage

export const query = graphql`
  query BookmarkQuery {
    allBookmarksJson(sort: {fields: [category], order: ASC}) {
      edges {
        node {
          category
          bookmarks {
            url
            comment
          }
        }
      }
    }
  }
`

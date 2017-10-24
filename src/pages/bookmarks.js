import React from 'react'
import Bookmark from '../components/Bookmark'
import {BookmarkGrid} from '../components/Grid'

const BookmarkPage = ({data}) => {
  return (
    <div>
      {data.allBookmarksJson.edges.map(({node}, index1) =>
        <div key={index1}>
          <h3>{node && node.category}</h3>
          <BookmarkGrid mb={4}>
            {node.bookmarks && node.bookmarks.map(({url}, index2) =>
              url && <Bookmark key={`${index1}${index2}`} url={url} />
            )}
          </BookmarkGrid>
        </div>
      )}
    </div>
  )
}

export default BookmarkPage

export const query = graphql`
  query BookmarkQuery {
    allBookmarksJson {
      edges {
        node {
          category
          bookmarks {
            url
          }
        }
      }
    }
  }
`

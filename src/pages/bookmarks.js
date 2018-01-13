import Bookmark from 'components/Bookmark'
import { BookmarkGrid } from 'components/Grid'
import Divider from 'components/Divider'
import { Heading } from 'components/Components'
import Page from 'components/Page'
import React from 'react'
import TableOfContents from 'components/TableOfContents'
import { capitalize } from 'utils/js'

const BookmarkPage = ({data}) => {
  const tocItems = data.allBookmarksJson.edges.map(a => a.node.category)

  return (
    <Page title='Bookmarks' icon='bookmark'>
      <TableOfContents items={tocItems} />

      {data.allBookmarksJson.edges.map(({node}, index1) =>
        <div key={index1}>
          <Heading id={node.category}>{capitalize(node.category)}</Heading>

          <BookmarkGrid mb={64}>
            {node.bookmarks && node.bookmarks.map(({url, comment, title}, index2) =>
              url &&
              <Bookmark
                key={`${index1}${index2}`}
                url={url}
                comment={comment}
                title={title}
              />
            )}
          </BookmarkGrid>

          <Divider />
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
            title
          }
        }
      }
    }
  }
`

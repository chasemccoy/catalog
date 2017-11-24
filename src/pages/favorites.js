import React from 'react'
import Page from '../components/Page'

const FavoritesPage = ({data}) => {
  return (
    <Page title='Favorites'>
      {data.allBookmarksJson.edges.map(({node}, index) =>
        <div key={index}>
          <h4>{node && node.category}</h4>
        </div>
      )}
    </Page>
  )
}

export default FavoritesPage

export const query = graphql`
  query FavoritesQuery {
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

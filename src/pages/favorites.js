import React from 'react'

const FavoritesPage = ({data}) => {
  return (
    <div>
      <h3>Favorites</h3>

      {data.allBookmarksJson.edges.map(({node}, index) =>
        <div key={index}>
          <h4>{node && node.category}</h4>
        </div>
      )}
    </div>
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

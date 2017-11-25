import React from 'react'
import Page from '../components/Page'
import { capitalize } from '../utils/js'

const FavoritesPage = ({data}) => {
  return (
    <Page title='Favorites'>
      {Object.keys(data).map((item, i) => (
        <div key={i}>
          <h3>{capitalize(item)}</h3>
          {data[item].edges.map(({node}, j) =>
            <div key={j}>
              <p>{node.title}</p>
            </div>
          )}
        </div>
      ))}
    </Page>
  )
}

export default FavoritesPage

export const query = graphql`
  query FavoritesQuery {
    books: allBooksJson(sort: {fields: [title], order: ASC}) {
      edges {
        node {
          title
          metadata
          description
          url
        }
      }
    }

    movies: allMoviesJson(sort: {fields: [title], order: ASC}) {
      edges {
        node {
          title
          metadata
          description
          url
        }
      }
    }
  }
`

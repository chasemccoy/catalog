import React from 'react'
import Page from '../components/Page'

const MoviesPage = ({data}) => {
  return (
    <Page title='Movies'>
      {data.movies.edges.map(({node}, i) =>
        <div key={i}>
          <p>{node.title}</p>
        </div>
      )}
    </Page>
  )
}

export default MoviesPage

export const query = graphql`
  query MoviesQuery {
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

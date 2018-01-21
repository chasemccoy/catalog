import Library from 'components/Library'
import Page from 'components/Page'
import React from 'react'

const MoviesPage = ({data}) => {
  return (
    <Page title='Movies' icon='movie'>
      <Library data={data.movies.edges} />
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
          image
        }
      }
    }
  }
`

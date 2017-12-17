import React from 'react'
import Page from '../components/Page'
import {Library} from '../components/Library'

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

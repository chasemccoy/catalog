import React from 'react'
import Page from '../components/Page'
import {Library} from '../components/Library'
import {Heading} from '../components/Components'
import { capitalize } from '../utils/js'

const FavoritesPage = ({data}) => {
  return (
    <Page title='Favorites'>
      {Object.keys(data).map((item, i) => (
        <div key={i}>
          <Heading>{capitalize(item)}</Heading>
          <Library data={data[item].edges} />
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
          image
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
          image
        }
      }
    }

    music: allMusicJson(sort: {fields: [title], order: ASC}) {
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

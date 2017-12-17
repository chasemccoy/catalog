import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import {Library} from '../components/Library'
import {Heading, Link} from '../components/Components'
import { capitalize } from '../utils/js'

const FavoritesPage = ({data}) => {
  return (
    <Page title='Favorites' icon='heart'>
      <p>Below are some things in various categories that I love. I think you can tell a lot about a person by paying attention to what they pay attention to, so here are the things that capture my attention.</p>

      {Object.keys(data).map((item, i) => (
        <div key={i}>
          <Heading>
            <Link to={item}>{capitalize(item)}</Link>
          </Heading>

          <Library preview data={data[item].edges} section={item}/>
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

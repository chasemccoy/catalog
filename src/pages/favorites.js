import {Heading, Link} from 'components/Components'

import Library from 'components/Library'
import Page from 'components/Page'
import React from 'react'
import { capitalize } from 'utils/js'
import styled from 'styled-components'

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
    # chicago: allChicagoHJson(sort: {fields: [title], order: ASC}) {
    #   edges {
    #     node {
    #       title
    #       description
    #       url
    #       image
    #     }
    #   }
    # }

    books: allBooksHJson(sort: {fields: [title], order: ASC}) {
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

    # movies: allMoviesHJson(sort: {fields: [title], order: ASC}) {
    #   edges {
    #     node {
    #       title
    #       metadata
    #       description
    #       url
    #       image
    #     }
    #   }
    # }

    music: allMusicHJson(sort: {fields: [title], order: ASC}) {
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

import React from 'react'
import Link from 'components/Link'
import { graphql } from 'gatsby'
import Page from 'components/Page'
import { capitalize } from 'utils/js'

const FavoritesPage = ({ data }) => {
  return (
    <Page title="Favorites" icon="heart" description='The best of the best.'>
      <p>
        Below are some things in various categories that I love. I think you can
        tell a lot about a person by paying attention to what they pay attention
        to, so here are the things that capture my attention.
      </p>

      {Object.keys(data).map((item, i) => (
        <div key={i}>
          <h2>
            <Link to={item}>{capitalize(item)}</Link>
          </h2>

          {/* <Library preview data={data[item].edges} section={item} /> */}
        </div>
      ))}
    </Page>
  )
}

export default FavoritesPage

export const query = graphql`
  query FavoritesQuery {
    chicago: allChicagoHJson(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          description
          url
          image
        }
      }
    }

    books: allBooksHJson(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          metadata
          description
          url
          image {
            childImageSharp {
              sizes(maxWidth: 900) {
                ...GatsbyImageSharpSizes
              }
            }
          }
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

    music: allMusicHJson(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          metadata
          description
          url
          image {
            childImageSharp {
              sizes(maxWidth: 900) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }

    apps: allAppsHJson(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          metadata
          description
          url
          image {
            childImageSharp {
              sizes(maxWidth: 900, toFormat: PNG) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`

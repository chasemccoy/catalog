import Library from 'components/Library'
import Page from 'components/Page'
import React from 'react'
import styled from 'styled-components'

const BooksPage = ({data}) => {
  return (
    <Page title='Books' icon='book'>
      <Library data={data.books.edges} mediaWidth={[1/3, 1/4]} />
    </Page>
  )
}

export default BooksPage

export const query = graphql`
  query BooksQuery {
    books: allBooksHJson(sort: {fields: [title], order: ASC}) {
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
  }
`

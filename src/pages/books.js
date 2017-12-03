import React from 'react'
import Page from '../components/Page'
import styled from 'styled-components'
import {Library} from '../components/Library'

const BooksPage = ({data}) => {
  return (
    <Page title='Books'>
      <Library data={data.books.edges} />
    </Page>
  )
}

export default BooksPage

export const query = graphql`
  query BooksQuery {
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
  }
`

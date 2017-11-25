import React from 'react'
import Page from '../components/Page'

const BooksPage = ({data}) => {
  return (
    <Page title='Books'>
      {data.books.edges.map(({node}, i) =>
        <div key={i}>
          <p>{node.title}</p>
        </div>
      )}
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
        }
      }
    }
  }
`

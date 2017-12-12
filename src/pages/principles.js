import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import {Link} from '../components/Components'

const PrinciplesPage = ({data}) => {
  return (
    <Page title='Principles'>
      {data.principles.edges.map(({node}, index) =>
        <div key={index}>
          <h2>{node.title}</h2>
          <p>{node.description}</p>

          {node.categories.map((category, i) =>
            <span key={i}>{category}</span>
          )}

          {node.links.map((link, i) =>
            <a href={link.url} target='_blank' key={i}>{link.title}</a>
          )}
        </div>
      )}
    </Page>
  )
}

export default PrinciplesPage

export const query = graphql`
  query PrinciplesQuery {
    principles: allPrinciplesJson(sort: {fields: [title], order: ASC}) {
      edges {
        node {
          title
          description
          categories
          links {
            title
            url
          }
        }
      }
    }
  }
`

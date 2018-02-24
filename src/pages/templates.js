import Page from 'components/Page'
import React from 'react'
import { capitalize } from 'utils/js'
import styled from 'styled-components'

const TemplatesPage = ({data}) => {
  return (
    <Page title='Templates'>
      {data.templates.edges.map(({node}, index) =>
        <div key={index}>
          <h3>{capitalize(node.type)}</h3>

          <pre dangerouslySetInnerHTML={{ __html: node.template.replace(/[\n\r]/g, '<br />') }} />
        </div>
      )}
    </Page>
  )
}

export default TemplatesPage

export const query = graphql`
  query TemplatesQuery {
    templates: allTemplatesHJson(sort: {fields: [type], order: ASC}) {
      edges {
        node {
          type
          template
        }
      }
    }
  }
`

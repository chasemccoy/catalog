import Library from 'components/Library'
import Page from 'components/Page'
import React from 'react'
import styled from 'styled-components'

const AppsPage = ({data}) => {
  return (
    <Page title='Apps' icon='app'>
      <Library data={data.apps.edges} />
    </Page>
  )
}

export default AppsPage

export const query = graphql`
  query AppsQuery {
    apps: allAppsHJson(sort: {fields: [title], order: ASC}) {
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

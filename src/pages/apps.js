import Library from 'components/Library'
import Page from 'components/Page'
import React from 'react'
import styled from 'styled-components'

const AppsPage = ({data}) => {
  return (
    <Page title='Apps' icon='app'>
      <p>Tools do not maketh man, but they sure do help us get things done. Here are some of the tools that I rely on every day to help me do better work.</p>

      <Library data={data.apps.edges} mediaWidth={[1/4]} />
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

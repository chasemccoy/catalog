import React from 'react'
import Page from '../components/Page'
import {Timeline, TimelineItem} from '../components/Timeline'

const PortfolioPage = ({data}) => {
  return (
    <Page title='Portfolio'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <Timeline>
        {data.allPortfolioJson.edges.map(({node}, index) =>
          <TimelineItem
            key={index}
            title={node.title}
            type={node.type}
            dateRange={node.dateRange}
          >
            {node.description}
          </TimelineItem>
        )}
      </Timeline>
    </Page>
  )
}

export default PortfolioPage

export const query = graphql`
  query PortfolioQuery {
    allPortfolioJson {
      edges {
        node {
          title
          type
          dateRange
          description
        }
      }
    }
  }
`

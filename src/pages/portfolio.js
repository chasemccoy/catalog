import React from 'react'
import { graphql } from 'gatsby'
import { Timeline, TimelineItem } from 'components/Timeline'
import Page from 'components/Page'
import { Text } from '@chasemccoy/kit'

const PortfolioPage = ({ data }) => {
  return (
    <Page title="Portfolio" icon="portfolio" description="A short history of my educational and professional career.">
      <Text.p>
        A timeline of a (brief) professional career that I am very proud of. I
        love talking about my work/industry, so get in touch and lets talk shop.
      </Text.p>

      <Timeline my={6}>
        {data.portfolio.edges.map(({ node }, index) => (
          <TimelineItem
            key={index}
            title={node.title}
            type={node.type}
            dateRange={node.dateRange}
          >
            {node.description}
          </TimelineItem>
        ))}
      </Timeline>
    </Page>
  )
}

export default PortfolioPage

export const query = graphql`
  query PortfolioQuery {
    portfolio: allPortfolioHJson {
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

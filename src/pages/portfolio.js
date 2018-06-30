import { Timeline, TimelineItem } from 'components/Timeline'
import Page from 'components/Page'
import React from 'react'
import { graphql } from 'gatsby'

const PortfolioPage = ({ data }) => {
  return (
    <Page wide title="Portfolio" icon="portfolio" description="A short history of my educational and professional career.">
      <h3>
        A timeline of a (brief) professional career that I am very proud of. I
        love talking about my work/industry, so get in touch and lets talk shop.
      </h3>

      <Timeline>
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

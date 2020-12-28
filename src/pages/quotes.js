import React from 'react'
import Page from 'components/Page'
import { graphql } from 'gatsby'
import MultiColumn from 'components/MultiColumn'

export const Quote = ({ content, source, ...rest }) => (
  <div {...rest}>
    <p className='serif'>{content}</p>
    <p className='mt-12 smaller bold' css='color: var(--color-gray--600);'>— {source}</p>
  </div>
)

const QuotesPage = ({ data }) => {
  return (
    <Page
      title='Quotes'
      description='A running list of musings than have struck me as worth keeping in mind.'
    >
      <MultiColumn count={2} gap='64px' minColumnWidth='15em' className='mt-24'>
        {data.quotes.edges.map(({ node }, i) => (
          <Quote
            content={node.content}
            source={node.metadata}
            className='mb-16 pb-16'
            css={`
              &:not(:last-child) {
                border-bottom: 2px solid var(--color-border);
              }

              &:last-child {
                margin-bottom: 0;
              }
            `}
            key={i}
          />
        ))}
      </MultiColumn>
    </Page>
  )
}

export default QuotesPage

export const query = graphql`
  query QuotesQuery {
    quotes: allQuotesHJson(sort: { fields: [metadata], order: ASC }) {
      edges {
        node {
          content
          metadata
          tags
        }
      }
    }
  }
`

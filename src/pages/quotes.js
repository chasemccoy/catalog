import React from 'react'
import Page from 'components/NewPage'
import { graphql } from 'gatsby'
import { Box, Text } from '@chasemccoy/kit'
import MultiColumn from 'components/MultiColumn'

export const Quote = ({ content, source, ...rest }) => (
  <Box {...rest}>
    <Text.p fontSize={22} lineHeight={1.3} mb={8}>
      {content}
    </Text.p>

    <Text.p m={0} fontSize={18} fontFamily='mono' color='gray.3'>
      {source}
    </Text.p>
  </Box>
)

const QuotesPage = ({ data }) => {
  return (
    <Page title='Quotes' description='Words worth keeping in mind.'>
      <MultiColumn count={2} gap='64px' minColumnWidth='400px'>
        {data.quotes.edges.map(({ node }, i) => (
          <Quote
            content={node.content}
            source={node.metadata}
            mb={24}
            pb={24}
            css={`
              &:not(:last-child) {
                border-bottom: 4px solid ${p => p.theme.colors.gray[0]};
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

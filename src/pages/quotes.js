import React from 'react'
import Page from 'components/Page'
import { graphql } from 'gatsby'
import { Box, Text } from '@chasemccoy/kit'
import MultiColumn from 'components/MultiColumn'
import Wide from 'components/Wide'

export const Quote = ({ content, source, ...rest }) => (
  <Box {...rest}>
    <Text.p fontSize='1.1em' mb={12}>
      {content}
    </Text.p>

    <Text.p m={0} fontSize='1.2em' fontFamily='serif' color='gray.4'>
      {source}
    </Text.p>
  </Box>
)

const QuotesPage = ({ data }) => {
  return (
    <Page title='Quotes' description='Words worth keeping in mind.'>
      <Wide mb={24}>
        <MultiColumn count={2} gap='64px' minColumnWidth='15em'>
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
      </Wide>
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

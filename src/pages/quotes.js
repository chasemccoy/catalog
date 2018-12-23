import React from 'react'
import Page from 'components/Page'
import { graphql } from 'gatsby'
import { Box } from 'components/Base'
import Text from 'components/Text'
import MultiColumn from 'components/MultiColumn'

export const Quote = ({content, source, ...rest}) => (
  <Box {...rest}>
    <Text.p fontSize={22} lineHeight={1.4} mb={3}>
      {content}
    </Text.p>

    <Text.p m={0} fontSize={18} fontFamily='mono' color='gray.3' italic>
      — {source}
    </Text.p>
  </Box>
)

const QuotesPage = ({ data }) => {
  return (
    <Page wide title="Quotes" description="Words worth keeping in mind.">
      <MultiColumn count={2} gap='80px' minWidth='400px' mt={48}>
        {data.quotes.edges.map(({ node }, i) => (
          <Quote
            content={node.content}
            source={node.metadata}
            mb={32}
            pb={32}
            css={`
              &:not(:last-child) {
                border-bottom: 2px solid ${p => p.theme.colors.gray[0]};
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

import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import { space } from 'styled-system'
import { graphql } from 'gatsby'
import { Box } from 'components/Base'
import Heading from 'components/Heading'
import Text from 'components/Text'

const QuoteContent = styled(Heading.h2)`
  ${space};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.4;
`

const Meta = styled.div`
  ${space}
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const Source = styled(Text.p)`
  margin: 0;
  font-size: 16px;
  flex-basis: 70%;
  display: flex;
  align-items: center;
  ${space};
  font-family: ${props => props.theme.fonts.mono};
  color: ${p => p.theme.colors.gray[4]};
`

const Dropcap = styled.span`
  font-size: 48px;
  line-height: 0;
  padding-top: 0.58em;
  margin-right: 8px;
  display: inline-block;
  vertical-align: middle;
  color: ${p => p.theme.colors.gray[2]};
  font-family: ${props => props.theme.fonts.serif};
`

export const Quote = props => (
  <Box mb={'104px'}>
    <QuoteContent pb={4} mb={0}>
      {props.content}
    </QuoteContent>

    <Meta>
      <Source>
        {<Dropcap>“</Dropcap>}
        {props.source}
      </Source>
    </Meta>
  </Box>
)

const QuotesPage = ({ data }) => {
  return (
    <Page resource title="Quotes" icon="quote" description="Words worth keeping in mind.">
      <Box mb={8} />

      {data.quotes.edges.map(({ node }, i) => (
        <React.Fragment key={i}>
          <Quote
            content={node.content}
            source={node.metadata}
          />
        </React.Fragment>
      ))}
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

import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import Divider from 'components/Divider'
import { space } from 'styled-system'
import { graphql } from 'gatsby'
import { Box } from 'components/Base'

const QuoteContent = styled.h2`
  ${space};
  font-weight: ${p => p.theme.fontWeights.normal};
`

const Meta = styled.div`
  ${space} display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const Source = styled.h3`
  margin: 0;
  font-weight: normal;
  flex-basis: 70%;
  display: flex;
  align-items: center;
  ${space};
  font-family: ${props => props.theme.fontFamily.mono};
  color: ${p => p.theme.colors.gray[3]};
`

const Dropcap = styled.span`
  font-size: 56px;
  line-height: 0;
  padding-top: 0.75em;
  margin-right: 8px;
  display: inline-block;
  vertical-align: middle;
  color: ${p => p.theme.colors.gray[2]};
  font-family: ${props => props.theme.fontFamily.serif};
`

const Highlight = styled.span`
  ${'' /* box-shadow: inset 0 -12px 0 0 ${p => p.theme.colors.gray[0]}; */}
`

export const Quote = props => (
  <div className='full'>
    <QuoteContent pb={4} mb={0}>
      <Highlight>{props.content}</Highlight>
    </QuoteContent>

    <Meta mt={-2}>
      <Source>
        {<Dropcap>“</Dropcap>}
        {props.source}
      </Source>
    </Meta>
  </div>
)

const QuotesPage = ({ data }) => {
  return (
    <Page title="Quotes" icon="quote" description="Words worth keeping in mind.">

      <Box mb={4} />

      {data.quotes.edges.map(({ node }, i) => (
        <React.Fragment key={i}>
          <Quote
            content={node.content}
            source={node.metadata}
            tags={node.tags}
          />

          <Divider my={6} />
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

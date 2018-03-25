import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import Token from 'components/Token'
import Divider from 'components/Divider'
import { colors } from 'utils/design'
import { space, borderRadius, themeGet } from 'styled-system'

const Container = styled.div`
  ${space}
  ${borderRadius}
  background-color: ${colors.primary.gray.light};
  overflow: hidden;
`

const Quote = styled.h2`
  ${space}
  color: ${colors.text.body};
`

const Meta = styled.div`
  ${space}
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary.gray.medium};
`

const Source = styled.h3`
  font-weight: ${themeGet('fontWeights.normal')};
  font-family: ${themeGet('fontFamily.sans')};
  text-align: right;
  ${'' /* font-style: italic; */}
  color: ${colors.text.muted};
  margin: 0;
`

const QuotesPage = ({data}) => {
  return (
    <Page title='Quotes' icon='quote'>
      {data.quotes.edges.map(({node}, i) => (
        <div key={i}>
          <Container p={4} borderRadius={2}>
            <Quote pt={2} pb={3}>“{node.content}”</Quote>

            <Meta p={3} m={-4}>
              <div>
                {node.tags.map((tag, j) => (
                  <Token key={j}>{tag}</Token>
                ))}
              </div>

              <Source>{node.metadata}</Source>
            </Meta>
          </Container>

          <Divider my={6}/>
        </div>
      ))}
    </Page>
  )
}

export default QuotesPage

export const query = graphql`
  query QuotesQuery {
    quotes: allQuotesHJson(sort: {fields: [metadata], order: ASC}) {
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

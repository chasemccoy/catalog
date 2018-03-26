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
  ${'' /* background-color: ${colors.primary.gray.light}; */}
  ${'' /* overflow: hidden; */}
  ${'' /* border: 1px solid ${colors.primary.gray.medium}; */}
  display: flex;
  flex-direction: column;
`

const Quote = styled.h2`
  ${space}
`

const Meta = styled.div`
  ${space}
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${'' /* background-color: ${colors.primary.gray.medium}; */}
  ${'' /* border-top: 1px solid ${colors.primary.gray.dark}; */}
`

const Tags = styled.div`
  ${space}
`

const Source = styled.h3`
  font-weight: ${themeGet('fontWeights.normal')};
  font-family: ${themeGet('fontFamily.sans')};
  color: ${colors.card.text};
  margin: 0;
  flex-basis: 60%;
  font-size: 20px;
`

const Dropcap = styled.div`
  float: left;
  font-family: ${themeGet('fontFamily.serif')};
  font-size: 70px;
  line-height: 60px;
  padding-top: 8px;
  ${space}
  color: ${colors.primary.gray.dark};
`

const Highlight = styled.span`
  box-shadow: inset 0 -12px 0 0 ${themeGet('colors.highlight')};
`

const QuotesPage = ({data}) => {
  return (
    <Page title='Quotes' icon='quote'>
      <br></br>
      
      {data.quotes.edges.map(({node}, i) => (
        <div key={i}>
          <Container>
            <Quote pb={4} mb={2}>
              {/* <Dropcap pr={4}>“</Dropcap> */}
              <Highlight>{node.content}</Highlight>
            </Quote>

            <Meta>
              <Source>{node.metadata}</Source>

              <Tags mt={-2}>
                {node.tags.map((tag, j) => (
                  <Token mt={2} mr={2} py={1} px={2} key={j}>{tag}</Token>
                ))}
              </Tags>
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

import Page from 'components/Page'
import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/Grid'
import Image from 'components/Image'
import { P, Box } from 'components/Base'
import Link from 'components/Link'
import Divider from 'components/Divider'

const Title = styled.h3`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 6px;
  font-family: ${props => props.theme.fontFamily.body};
`

const Subtitle = styled.h4`
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: normal;
  color: ${props => props.theme.colors.text.muted};
`

const BooksPage = ({ data }) => {
  return (
    <Page title="Books" icon="book">
      <P>
        A few excellent reads that have shaped who I am, how I work, or how I think about the world around me.
      </P>

      <Divider mt={6} mb={8} />

      <Row alignItems='flex-end'>
        {data.books.edges.map(({node}, i) => (
          <Column width={[1, 1/2, 1/3]} key={i}>
            <Link to={node.url} unstyled>
              <Box boxShadow='light' borderRadius='4px'>
                <Image sizes={node.image.childImageSharp.sizes} />
              </Box>

              <Box height='8em' mt={3}>
                <Title>{node.title}</Title>
                <Subtitle>{node.metadata}</Subtitle>
              </Box>
            </Link>
          </Column>
        ))}
      </Row>
    </Page>
  )
}

export default BooksPage

export const query = graphql`
  query BooksQuery {
    books: allBooksHJson(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          metadata
          description
          url
          image {
            childImageSharp {
              sizes(maxWidth: 900) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`

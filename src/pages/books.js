import Page from 'components/Page'
import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/Grid'
import Image from 'components/Image'
import { P, Box } from 'components/Base'
import Link from 'components/Link'
import { graphql } from 'gatsby'

const Title = styled.h3`
  font-family: ${props => props.theme.fontFamily.serif};
`

const Subtitle = styled.h4`
  font-family: ${props => props.theme.fontFamily.mono};
  font-weight: normal;
  color: ${props => props.theme.colors.gray[3]};
`

const BooksPage = ({ data }) => {
  return (
    <Page title="Books" icon="book" description="A few excellent reads that have shaped who I am, how I work, or how I think about the world around me.">
      <P>
        A few excellent reads that have shaped who I am, how I work, or how I think about the world around me.
      </P>

      <Row mt={6} alignItems='flex-end' className='full'>
        {data.books.edges.map(({node}, i) => (
          <Column width={[1, 1/2, 1/3]} key={i}>
            <Link to={node.url} unstyled>
              <Box>
                <Image sizes={node.image.childImageSharp.fluid} />
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
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

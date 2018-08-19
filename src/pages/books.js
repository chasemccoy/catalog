import Page from 'components/Page'
import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/Grid'
import Image from 'components/Image'
import { Box } from 'components/Base'
import Text from 'components/Text'
import Link from 'components/Link'
import { graphql } from 'gatsby'
import Heading from 'components/Heading'

const BooksPage = ({ data }) => {
  return (
    <Page title="Books" icon="book" description="A few excellent reads that have shaped who I am, how I work, or how I think about the world around me.">
      <Text.p>
        A few excellent reads that have shaped who I am, how I work, or how I think about the world around me.
      </Text.p>

      <Row mt={6} alignItems='flex-end' className='full'>
        {data.books.edges.map(({node}, i) => (
          <Column width={[1, 1/2, 1/3]} key={i}>
            <Link to={node.url} unstyled>
              <Box>
                <Image sizes={node.image.childImageSharp.fluid} />
              </Box>

              <Box height='8em' mt={3}>
                <Heading.h3>{node.title}</Heading.h3>
                <Heading.h4 color='gray.3' fontFamily='mono' fontWeight='normal'>{node.metadata}</Heading.h4>
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

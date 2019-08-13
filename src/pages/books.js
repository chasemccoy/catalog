import Page from 'components/Page'
import React from 'react'
import { Column, Row } from 'components/Grid'
import Image from 'components/Image'
import { Box, Text } from '@chasemccoy/kit'
import Link from 'components/Link'
import { graphql } from 'gatsby'
import Heading from 'components/Heading'

const BooksPage = ({ data }) => {
  return (
    <Page
      untitled
      title='Books'
      description='A few excellent reads that have shaped who I am, how I work, or how I think about the world around me.'
    >
      <Row mt={6} alignItems='flex-end' className='full'>
        {data.books.edges.map(({ node }, i) => (
          <Column width={[1 / 2, 1 / 2, 1 / 3]} key={i}>
            <Link to={node.url} unstyled>
              <Image fluid={node.image.childImageSharp.fluid} />

              <Box height='8em'>
                <Heading.h3 my={8} lineHeight={1.3} color='page.text'>
                  {node.title}
                </Heading.h3>
                <Text.p fontSize='16px' color='gray.4' fontFamily='mono'>
                  <em>{node.metadata}</em>
                </Text.p>
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

import Page from 'components/Page'
import React from 'react'
import Image from 'components/Image'
import { Box, Text, Grid } from '@chasemccoy/kit'
import Link from 'components/Link'
import { graphql } from 'gatsby'
import Wide from 'components/Wide'

const BooksPage = ({ data }) => {
  return (
    <Page
      title='Books'
      description='A few excellent reads that have shaped who I am, how I work, or how I think about the world around me.'
    >
      <Wide left={false}>
        <Grid>
          {data.books.edges.map(({ node }, i) => (
            <Box
              width={[1 / 2, 1 / 2, 1 / 3, 1 / 4]}
              display='flex'
              alignItems='flex-end'
              key={i}
            >
              <Link to={node.url} unstyled width='100%'>
                <Image fluid={node.image.childImageSharp.fluid} />

                <Box height='8em'>
                  <h3 my={8} lineHeight={1.3} color='page.text'>
                    {node.title}
                  </h3>
                  <Text.p fontSize='16px' color='gray.4'>
                    {node.metadata}
                  </Text.p>
                </Box>
              </Link>
            </Box>
          ))}
        </Grid>
      </Wide>
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
